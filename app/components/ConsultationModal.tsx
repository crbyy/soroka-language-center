"use client";

import { createPortal } from "react-dom";
import { useState } from "react";

type ConsultationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ConsultationModal({
  isOpen,
  onClose,
}: ConsultationModalProps) {
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  if (!isOpen || typeof document === "undefined") return null;

async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  setIsSending(true);
  setSuccess(false);
  setError("");

  const form = event.currentTarget;
  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    comment: formData.get("comment") || "",
  };

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/consultation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Ошибка отправки");
    }

    setSuccess(true);
    form.reset();
  } catch (error) {
    console.error(error);
    setError("Не удалось отправить заявку. Попробуйте ещё раз.");
  } finally {
    setIsSending(false);
  }
}

    return createPortal(
      <div
        className="
          fixed inset-0 z-[9999]
          flex items-start justify-center
          overflow-y-auto
          bg-black/50
          px-4 py-4
          sm:items-center sm:py-8
        "
        onMouseDown={onClose}
      >
        <div
          className="
            relative
            my-auto
            w-full
            max-w-[560px]
            rounded-2xl
            bg-white
            p-5
            shadow-2xl
            sm:p-8
          "
          onMouseDown={(event) => event.stopPropagation()}
        >
          {/* Кнопка закрытия */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть"
            className="
              absolute right-4 top-3
              flex h-10 w-10
              cursor-pointer
              items-center justify-center
              rounded-full
              text-3xl
              text-gray-400
              transition-colors
              hover:bg-gray-100
              hover:text-navy
              sm:right-5 sm:top-4
            "
          >
            ×
          </button>

          <p className="pr-10 text-xs font-medium uppercase tracking-wide text-navy/60 sm:text-sm">
            Бесплатная консультация
          </p>

          <h2 className="mt-2 pr-8 text-2xl font-bold leading-tight text-navy sm:text-3xl">
            Запишитесь на{" "}
            <span className="text-orange">консультацию</span>
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-gray-500">
            Оставьте свои контакты, и мы свяжемся с вами и поможем
            подобрать подходящий курс.
          </p>

          <form onSubmit={handleSubmit} className="mt-5 sm:mt-6">

            {/* Имя */}
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-navy sm:mb-2"
              >
                Имя
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Ваше имя"
                className="
                  w-full
                  rounded-lg
                  border border-gray-200
                  px-4 py-3
                  text-base
                  outline-none
                  focus:border-orange
                "
              />
            </div>

            {/* Телефон */}
            <div className="mt-3 sm:mt-4">
              <label
                htmlFor="phone"
                className="mb-1.5 block text-sm font-medium text-navy sm:mb-2"
              >
                Телефон
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="+7"
                className="
                  w-full
                  rounded-lg
                  border border-gray-200
                  px-4 py-3
                  text-base
                  outline-none
                  focus:border-orange
                "
              />
            </div>

            {/* Email */}
            <div className="mt-3 sm:mt-4">
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-navy sm:mb-2"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="example@mail.ru"
                className="
                  w-full
                  rounded-lg
                  border border-gray-200
                  px-4 py-3
                  text-base
                  outline-none
                  focus:border-orange
                "
              />
            </div>

            {/* Комментарий */}
            <div className="mt-3 sm:mt-4">
              <label
                htmlFor="comment"
                className="mb-1.5 block text-sm font-medium text-navy sm:mb-2"
              >
                Комментарий или вопрос
              </label>

              <textarea
                id="comment"
                name="comment"
                rows={3}
                placeholder="Какой курс вас интересует?"
                className="
                  w-full
                  resize-none
                  rounded-lg
                  border border-gray-200
                  px-4 py-3
                  text-base
                  outline-none
                  focus:border-orange
                "
              />
            </div>

            {/* Согласие */}
            <label className="mt-4 flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                required
                className="mt-1 h-4 w-4 shrink-0 accent-orange"
              />

              <span className="text-xs leading-relaxed text-gray-500">
                Я согласен(а) на обработку{" "}
                <a
                  className="text-orange hover:underline"
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  персональных данных
                </a>.
              </span>
            </label>

            {/* Кнопка */}
            <button
              type="submit"
              disabled={isSending}
              className="
                mt-5
                w-full
                cursor-pointer
                rounded-lg
                bg-orange
                px-6 py-3.5
                font-semibold
                text-white
                transition-all
                hover:brightness-95
                disabled:cursor-not-allowed
                disabled:opacity-60
                sm:mt-6
              "
            >
              {isSending ? "Отправляем..." : "Отправить заявку"}
            </button>

            {success && (
              <p className="mt-4 text-center text-sm font-medium text-[#0F7377]">
                Спасибо! Заявка успешно отправлена.
              </p>
            )}

            {error && (
              <p className="mt-4 text-center text-sm font-medium text-red-500">
                {error}
              </p>
            )}

          </form>
        </div>
      </div>,
      document.body
    );
}