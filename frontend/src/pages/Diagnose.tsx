import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Diagnose = () => {
  interface FormData {
    symptom1: string;
    symptom2: string;
    symptom3: string;
    symptom4: string;
    symptom5: string;
  }
  const initialFormData: FormData = { symptom1: "", symptom2: "", symptom3: "", symptom4: "", symptom5: "" };
  const [formData, setFormData] = useState(initialFormData);
  const [submitBtn, setSubmitBtn] = useState("Get Results");
  const [response, setResponse] = useState<{
    prediction: string;
    description: string;
    precautions: string[];
  } | null>(null);
  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitBtn("Submitting...");
    const res = await axios.post("https://medisen.onrender.com/results", formData);
    setSubmitBtn("Get Results");
    setResponse(res.data);
  };
  useEffect(() => {
    const symptomsList = [
      "itching",
      "skin rash",
      "nodal skin eruptions",
      "continuous sneezing",
      "shivering",
      "chills",
      "joint pain",
      "stomach pain",
      "acidity",
      "ulcers on tongue",
      "muscle wasting",
      "vomiting",
      "burning micturition",
      "spotting urination",
      "fatigue",
      "weight gain",
      "anxiety",
      "cold hands and feets",
      "mood swings",
      "weight loss",
      "restlessness",
      "lethargy",
      "patches in throat",
      "irregular sugar level",
      "cough",
      "high fever",
      "sunken eyes",
      "breathlessness",
      "sweating",
      "dehydration",
      "indigestion",
      "headache",
      "yellowish skin",
      "dark urine",
      "nausea",
      "loss of appetite",
      "pain behind the eyes",
      "back pain",
      "constipation",
      "abdominal pain",
      "diarrhoea",
      "mild fever",
      "yellow urine",
      "yellowing of eyes",
      "acute liver failure",
      "fluid overload",
      "swelling of stomach",
      "swelled lymph nodes",
      "malaise",
      "blurred and distorted vision",
      "phlegm",
      "throat irritation",
      "redness of eyes",
      "sinus pressure",
      "runny nose",
      "congestion",
      "chest pain",
      "weakness in limbs",
      "fast heart rate",
      "pain during bowel movements",
      "pain in anal region",
      "bloody stool",
      "irritation in anus",
      "neck pain",
      "dizziness",
      "cramps",
      "bruising",
      "obesity",
      "swollen legs",
      "swollen blood vessels",
      "puffy face and eyes",
      "enlarged thyroid",
      "brittle nails",
      "swollen extremeties",
      "excessive hunger",
      "extra marital contacts",
      "drying and tingling lips",
      "slurred speech",
      "knee pain",
      "hip joint pain",
      "muscle weakness",
      "stiff neck",
      "swelling joints",
      "movement stiffness",
      "spinning movements",
      "loss of balance",
      "unsteadiness",
      "weakness of one body side",
      "loss of smell",
      "bladder discomfort",
      "foul smell of urine",
      "continuous feel of urine",
      "passage of gases",
      "internal itching",
      "toxic look (typhos)",
      "depression",
      "irritability",
      "muscle pain",
      "altered sensorium",
      "red spots over body",
      "belly pain",
      "abnormal menstruation",
      "dischromic  patches",
      "watering from eyes",
      "increased appetite",
      "polyuria",
      "family history",
      "mucoid sputum",
      "rusty sputum",
      "lack of concentration",
      "visual disturbances",
      "receiving blood transfusion",
      "receiving unsterile injections",
      "coma",
      "stomach bleeding",
      "distention of abdomen",
      "history of alcohol consumption",
      "fluid overload",
      "blood in sputum",
      "prominent veins on calf",
      "palpitations",
      "painful walking",
      "pus filled pimples",
      "blackheads",
      "scurring",
      "skin peeling",
      "silver like dusting",
      "small dents in nails",
      "inflammatory nails",
      "blister",
      "red sore around nose",
      "yellow crust ooze",
      "prognosis",
      "hypertension",
    ];
    // Function to display suggestions
    function displaySuggestions(inputId: string) {
      const input: HTMLInputElement = document.getElementById(inputId)! as HTMLInputElement;
      const userInput = input.value.toLowerCase();
      const suggestions = symptomsList.filter((symptom) => symptom.toLowerCase().includes(userInput));

      const suggestionsDiv = document.getElementById("suggestions" + inputId.charAt(inputId.length - 1))!;
      suggestionsDiv.innerHTML = "";
      suggestionsDiv.style.overflowY = "scroll";

      suggestions.forEach((suggestion, index) => {
        const suggestionBtn = document.createElement("button");
        suggestionBtn.textContent = suggestion;
        suggestionBtn.style.display = "block";
        suggestionBtn.style.width = "100%";
        suggestionBtn.style.borderBottom = "1px solid #ede";
        suggestionBtn.style.textAlign = "left";
        suggestionBtn.style.padding = "1rem";
        suggestionBtn.style.cursor = "pointer";
        suggestionBtn.addEventListener("click", (event) => {
          input.value = suggestion;
          switch (inputId.charAt(inputId.length - 1)) {
            case "1": {
              setFormData({ ...formData, symptom1: suggestion });
              break;
            }
            case "2": {
              setFormData({ ...formData, symptom2: suggestion });
              break;
            }
            case "3": {
              setFormData({ ...formData, symptom3: suggestion });
              break;
            }
            case "4": {
              setFormData({ ...formData, symptom4: suggestion });
              break;
            }
            case "5": {
              setFormData({ ...formData, symptom5: suggestion });
              break;
            }
          }
          suggestionsDiv.style.display = "none";
          event.preventDefault();
          event.stopPropagation();
        });
        suggestionBtn.addEventListener("keydown", (event) => {
          if (event.key === "Enter") {
            input.value = suggestion;
            switch (inputId.charAt(inputId.length - 1)) {
              case "1": {
                setFormData({ ...formData, symptom1: suggestion });
                break;
              }
              case "2": {
                setFormData({ ...formData, symptom2: suggestion });
                break;
              }
              case "3": {
                setFormData({ ...formData, symptom3: suggestion });
                break;
              }
              case "4": {
                setFormData({ ...formData, symptom4: suggestion });
                break;
              }
              case "5": {
                setFormData({ ...formData, symptom5: suggestion });
                break;
              }
            }
            suggestionsDiv.style.display = "none";
            event.preventDefault();
            event.stopPropagation();
          } else if (event.key === "ArrowDown") {
            const nextSuggestionBtn: HTMLButtonElement = suggestionsDiv.children[index + 1] as HTMLButtonElement;
            if (nextSuggestionBtn) {
              nextSuggestionBtn.focus();
            }
          } else if (event.key === "ArrowUp") {
            const prevSuggestionBtn: HTMLButtonElement = suggestionsDiv.children[index - 1] as HTMLButtonElement;
            if (prevSuggestionBtn) {
              prevSuggestionBtn.focus();
            } else {
              input.focus();
            }
          }
        });
        suggestionsDiv.appendChild(suggestionBtn);
      });

      if (suggestions.length > 0 && input.value !== "") {
        suggestionsDiv.style.display = "block";
      } else {
        suggestionsDiv.style.display = "none";
      }
    }

    // Event listeners for input fields
    document.querySelectorAll('input[type="text"]').forEach((input) => {
      input.addEventListener("input", () => {
        displaySuggestions(input.id);
      });
    });

    // cleanup on unmount
    return () => {
      document.querySelectorAll('input[type="text"]').forEach((input) => {
        input.removeEventListener("input", () => {
          displaySuggestions(input.id);
        });
      });
    };
  }, [formData]);
  switch (response) {
    case null: {
      return (
        <form onSubmit={(e) => submitForm(e)} method="POST" className="px-4 mx-auto my-16 max-w-xl">
          <div className="pb-8 text-4xl font-bold w-full text-center">Diagnose using AI</div>
          <div className="mb-5">
            <label htmlFor="symptom1" className="block mb-2 text-sm font-medium text-gray-900">
              Enter Symptom 1
            </label>
            <input
              type="text"
              id="symptom1"
              name="symptom1"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  symptom1: e.target.value,
                })
              }
              autoComplete="off"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-deep-purple-accent-400 block w-full p-2.5"
              placeholder="Nausea"
              required
            />
            <div
              id="suggestions1"
              className="suggestions hidden max-h-32 shadow-lg border overflow-y-auto md:w-2/3 absolute bg-white p-2 rounded-lg z-10"
            ></div>
          </div>
          <div className="mb-5">
            <label htmlFor="symptom2" className="block mb-2 text-sm font-medium text-gray-900">
              Enter Symptom 2
            </label>
            <input
              type="text"
              id="symptom2"
              name="symptom2"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  symptom2: e.target.value,
                })
              }
              autoComplete="off"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-deep-purple-accent-400 block w-full p-2.5"
              placeholder="Mild fever"
              required
            />
            <div
              id="suggestions2"
              className="suggestions hidden max-h-32 shadow-lg border overflow-y-auto md:w-2/3 absolute bg-white p-2 rounded-lg z-10"
            ></div>
          </div>
          <div className="mb-5">
            <label htmlFor="symptom3" className="block mb-2 text-sm font-medium text-gray-900">
              Enter Symptom 3
            </label>
            <input
              type="text"
              id="symptom3"
              name="symptom3"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  symptom3: e.target.value,
                })
              }
              autoComplete="off"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-deep-purple-accent-400 block w-full p-2.5"
              placeholder="Headache"
              required
            />
            <div
              id="suggestions3"
              className="suggestions hidden max-h-32 shadow-lg border overflow-y-auto md:w-2/3 absolute bg-white p-2 rounded-lg z-10"
            ></div>
          </div>
          <div className="mb-5">
            <label htmlFor="symptom4" className="block mb-2 text-sm font-medium text-gray-900">
              Enter Symptom 4 (optional)
            </label>
            <input
              type="text"
              id="symptom4"
              name="symptom4"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  symptom4: e.target.value,
                })
              }
              autoComplete="off"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-deep-purple-accent-400 block w-full p-2.5"
              placeholder="Cough"
            />
            <div
              id="suggestions4"
              className="suggestions hidden max-h-32 shadow-lg border overflow-y-auto md:w-2/3 absolute bg-white p-2 rounded-lg z-10"
            ></div>
          </div>
          <div className="mb-5">
            <label htmlFor="symptom5" className="block mb-2 text-sm font-medium text-gray-900">
              Enter Symptom 5 (optional)
            </label>
            <input
              type="text"
              id="symptom5"
              name="symptom5"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  symptom5: e.target.value,
                })
              }
              autoComplete="off"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-deep-purple-accent-400 block w-full p-2.5"
              placeholder="Continuous sneezing"
            />
            <div
              id="suggestions5"
              className="suggestions hidden max-h-32 shadow-lg border overflow-y-auto md:w-2/3 absolute bg-white p-2 rounded-lg z-10"
            ></div>
          </div>
          <button
            type="submit"
            disabled={submitBtn === "Submitting..."}
            className="text-white bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center disabled:bg-deep-purple-accent-100 disabled:cursor-not-allowed"
          >
            {submitBtn}
          </button>
        </form>
      );
    }
    default: {
      return (
        <div className="py-16 px-8 flex flex-col items-center">
          <div className="pb-8 text-4xl font-bold w-full text-center">Your Report</div>
          <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 sm:grid-cols-2">
            <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
              <div className="h-full flex items-center p-5 border border-l-0 rounded-r-lg shadow-sm">
                <h6 className="mb-2 font-semibold leading-5">
                  Our AI doctor diagnosed you with <h1 className="text-2xl font-bold">{response.prediction}</h1>
                </h6>
              </div>
            </div>
            <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
              <div className="h-full p-5 border border-l-0 rounded-r-lg shadow-sm">
                <h6 className="mb-2 font-semibold leading-5">Doctor said</h6>
                <p className="text-sm text-gray-900">{response.description}</p>
              </div>
            </div>
            <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
              <div className="h-full p-5 border border-l-0 rounded-r-lg shadow-sm">
                <h6 className="mb-2 font-semibold leading-5">Doctor advised you to</h6>
                <p className="text-sm text-gray-900">
                  <li>{response.precautions[0]}</li>
                  <li>{response.precautions[1]}</li>
                  <li>{response.precautions[2]}</li>
                  <li>{response.precautions[3]}</li>
                </p>
              </div>
            </div>
          </div>
          <Link
            to="/appointment"
            className="mb-4 text-gray-900 bg-light-green-accent-400 hover:bg-light-green-accent-700 focus:outline-none font-medium rounded-lg shadow-lg text-sm w-full px-5 py-2.5 max-w-2xl text-center"
            aria-label="Book an Appointment"
            title="Book an Appointment"
          >
            Book an Appointment
          </Link>
          <button
            onClick={() => setResponse(null)}
            className="text-white bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:outline-none font-medium rounded-lg shadow-lg text-sm w-full px-5 py-2.5 max-w-2xl text-center"
            aria-label="Diagnose Now"
            title="Diagnose Now"
          >
            Diagnose Again
          </button>
        </div>
      );
    }
  }
};

export default Diagnose;
