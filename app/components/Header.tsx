"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ConsultationButton from "./ConsultationButton";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const coursesLink =
    pathname === "/"
      ? "#courses"
      : pathname === "/courses"
        ? "/courses"
        : "/#courses";

  const aboutLink =
    pathname === "/"
      ? "#about"
      : pathname === "/about"
        ? "/about"
        : "/#about";

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative z-50 w-full bg-[#FFF8EE]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-3 sm:px-8 lg:px-10">

        {/* Логотип */}
        <a href="/" className="shrink-0">
          <Image
            src="/images/logo/soroka_text_logo.svg"
            alt="Языковой центр «Сорока»"
            width={250}
            height={130}
            className="h-auto w-[150px] sm:w-[190px] lg:w-[250px]"
            priority
          />
        </a>

        {/* Desktop навигация */}
        <nav className="hidden items-center gap-7 lg:flex">
          <a
            href={coursesLink}
            className="text-lg font-semibold text-navy transition-colors hover:text-orange"
          >
            Курсы
          </a>

          <a
            href={aboutLink}
            className="text-lg font-semibold text-navy transition-colors hover:text-orange"
          >
            О нас
          </a>

          <a
            href="#contacts"
            className="text-lg font-semibold text-navy transition-colors hover:text-orange"
          >
            Контакты
          </a>
        </nav>

        {/* Desktop: соцсети + кнопка */}
        <div className="hidden items-center gap-4 lg:flex">

          <div className="flex items-center gap-2">
            <a
              href="https://vk.ru/sorokachita"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ВКонтакте"
              className="flex h-10 w-10 items-center justify-center rounded-full transition-all hover:bg-white hover:shadow-sm"
            >
              <Image
                src="/images/logo/vk.svg"
                alt=""
                width={26}
                height={26}
                className="h-[26px] w-[26px] object-contain"
              />
            </a>

            <a
              href="https://www.youtube.com/@soroka4101"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-full transition-all hover:bg-white hover:shadow-sm"
            >
              <Image
                src="/images/logo/youtube.svg"
                alt=""
                width={26}
                height={26}
                className="h-[26px] w-[26px] object-contain"
              />
            </a>
          </div>

          <ConsultationButton
            className="rounded-lg bg-orange px-7 py-4 text-base font-semibold text-white transition-all hover:brightness-95"
          >
            Записаться на консультацию
          </ConsultationButton>
        </div>

        {/* Mobile burger */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-navy transition-colors hover:bg-white lg:hidden"
          aria-label="Открыть меню"
          aria-expanded={isMenuOpen}
        >
          <span className="relative block h-5 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 bg-current transition-all ${
                isMenuOpen ? "top-[9px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[9px] h-0.5 w-6 bg-current transition-all ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[18px] h-0.5 w-6 bg-current transition-all ${
                isMenuOpen ? "top-[9px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-t border-navy/10 bg-[#FFF8EE] px-5 pb-6 pt-4 lg:hidden">

          <nav className="flex flex-col">
            <a
              href={coursesLink}
              onClick={closeMenu}
              className="border-b border-navy/10 py-4 text-lg font-semibold text-navy"
            >
              Курсы
            </a>

            <a
              href={aboutLink}
              onClick={closeMenu}
              className="border-b border-navy/10 py-4 text-lg font-semibold text-navy"
            >
              О нас
            </a>

            <a
              href="#contacts"
              onClick={closeMenu}
              className="py-4 text-lg font-semibold text-navy"
            >
              Контакты
            </a>
          </nav>

          {/* Соцсети */}
          <div className="mt-3 flex items-center gap-3">
            <a
              href="https://vk.ru/sorokachita"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ВКонтакте"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white"
            >
              <Image
                src="/images/logo/vk.svg"
                alt=""
                width={26}
                height={26}
                className="h-[26px] w-[26px] object-contain"
              />
            </a>

            <a
              href="https://www.youtube.com/@soroka4101"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white"
            >
              <Image
                src="/images/logo/youtube.svg"
                alt=""
                width={26}
                height={26}
                className="h-[26px] w-[26px] object-contain"
              />
            </a>
          </div>

          {/* CTA */}
          <div className="mt-5">
            <ConsultationButton
              className="w-full rounded-lg bg-orange px-6 py-4 text-base font-semibold text-white transition-all hover:brightness-95"
            >
              Записаться на консультацию
            </ConsultationButton>
          </div>
        </div>
      )}
    </header>
  );
}