"use client"

import Image from "next/image";
import { usePathname } from "next/navigation";
import ConsultationButton from "./ConsultationButton";

export default function Header() {
  const pathname = usePathname();

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

  return (
    <header className="w-full bg-[#FFF8EE]" >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-10 py-3">

        {/* Логотип */}
        <a href="/" className="shrink-0">
          <Image
            src="/images/logo/soroka_text_logo.svg"
            alt="Языковой центр «Сорока»"
            width={250}
            height={130}
            className="h-auto w-[250px]"
            priority
          />
        </a>

        {/* Навигация */}
        <nav className="flex items-center gap-7">
          <a
            href={coursesLink}
            className="text-lg text-navy font-semibold transition-colors hover:text-orange"
          >
            Курсы
          </a>

          <a
            href={aboutLink}
            className="text-lg text-navy font-semibold transition-colors hover:text-orange"
          >
            О нас
          </a>


          <a
            href="#contacts"
            className="text-lg  text-navy font-semibold transition-colors hover:text-orange"
          >
            Контакты
          </a>
        </nav>

        {/* Кнопка + соцсети */}
        <div className="flex items-center gap-4">


          {/* Соцсети */}
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
      </div>
    </header>
  );
}