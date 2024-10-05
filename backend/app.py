import pickle
from collections import Counter
from os import getenv
import numpy as np
import pandas as pd
from dotenv import load_dotenv
from flask import Flask, jsonify, request

load_dotenv()

app = Flask("medisen")
app.config["SECRET_KEY"] = getenv("SECRET_KEY")

desc = pd.read_csv("Description.csv")


def description(pred):
    return desc[desc["Disease"] == pred]["Description"].values[0]


train = pd.read_csv("Training.csv")
index_value = {}
temp = train.iloc[:, 0:132]
for index, value in enumerate(
    temp.columns
):  # index = column number and value = column name
    value = " ".join([i for i in value.split("_")])
    value = value.strip()
    index_value[value] = index
# print(len(index_value))
prec = pd.read_csv("precaution.csv")


def precautions(pred):
    l = []
    array = prec[prec["Disease"] == pred].values[:, 1:]
    for i in array:
        for j in i:
            l.append(j)
    return l


with open("model1.pkl", "rb") as m1:
    model1 = pickle.load(m1)

with open("model2.pkl", "rb") as m2:
    model2 = pickle.load(m2)

with open("model3.pkl", "rb") as m3:
    model3 = pickle.load(m3)

with open("encoded.pkl", "rb") as e:
    encoded = pickle.load(e)


def prediction(arr):
    input_data = [0] * len(index_value)  # input data has 132 zeroes
    for i in arr:
        if i in index_value.keys():
            num = index_value[i]  # disease respective encoded value
            input_data[num] = 1  # set disease respective column one

    input_data = np.array(input_data).reshape(1, -1)
    predict1 = model1.predict(input_data)  # as predict is array of size one
    predict2 = model2.predict(input_data)
    predict3 = model3.predict(input_data)
    predict_array = tuple([predict1[0], predict2[0], predict3[0]])
    final_predict = Counter(predict_array).most_common(1)[0][0]
    print(final_predict)
    type(final_predict)
    return encoded[final_predict]


@app.route("/results", methods=["POST", "GET"])
def predicted_value():
    symptom1: str = request.form.get("symptom1", "")
    symptom2: str = request.form.get("symptom2", "")
    symptom3: str = request.form.get("symptom3", "")
    symptom4: str = request.form.get("symptom4", "")
    symptom5: str = request.form.get("symptom5", "")
    arr = np.array([symptom1, symptom2, symptom3, symptom4, symptom5])
    pred = prediction(arr)
    print(pred)
    data = {
        "prediction": pred,
        "description": description(pred),
        "precautions": precautions(pred),
    }
    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)
