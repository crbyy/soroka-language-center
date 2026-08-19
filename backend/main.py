import os
import smtplib

from email.message import EmailMessage

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ConsultationRequest(BaseModel):
    name: str
    phone: str
    email: str
    comment: str = ""


@app.get("/")
def root():
    return {"message": "Soroka API работает"}


@app.post("/consultation")
def send_consultation(data: ConsultationRequest):
    username = os.getenv("MAIL_USERNAME")
    password = os.getenv("MAIL_PASSWORD")
    recipient = os.getenv("MAIL_TO")

    if not username or not password or not recipient:
        raise HTTPException(
            status_code=500,
            detail="Не настроены почтовые переменные",
        )

    message = EmailMessage()
    message["Subject"] = "Новая заявка с сайта «Сорока»"
    message["From"] = username
    message["To"] = recipient

    message.set_content(
        f"""
Новая заявка с сайта «Сорока»

Имя: {data.name}
Телефон: {data.phone}
Email: {data.email}

Комментарий:
{data.comment or "Не указан"}
"""
    )

    try:
        with smtplib.SMTP_SSL("smtp.mail.ru", 465) as smtp:
            smtp.login(username, password)
            smtp.send_message(message)

    except Exception as error:
        print(error)

        raise HTTPException(
            status_code=500,
            detail="Не удалось отправить письмо",
        )

    return {"success": True}