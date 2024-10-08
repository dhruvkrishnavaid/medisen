FROM python:3.12
WORKDIR /usr/local/backend

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5000

RUN useradd medisen
USER medisen

CMD [ "python", "app.py" ]