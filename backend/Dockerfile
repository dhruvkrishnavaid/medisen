FROM python:3.12
WORKDIR /usr/local/backend

RUN python3 -m venv .venv
ENV VIRTUAL_ENV=/usr/local/backend/.venv
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

COPY . .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5000

RUN useradd medisen
USER medisen

CMD [ "python", "app.py" ]