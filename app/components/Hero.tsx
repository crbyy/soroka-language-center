import Image from "next/image";
import ConsultationButton from "./ConsultationButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 items-center gap-12 px-10 py-10">

        {/* Левая часть */}
        <div className="relative z-10">

          {/* Заголовок */}
          <h1 className="max-w-[650px] text-6xl font-bold leading-[1.05] tracking-tight text-navy">
            Открой дверь
            <br />
            в большой и
            <br />
            <span className="text-orange">интересный</span> мир
          </h1>

          {/* Подзаголовок */}
            <p className="mt-6 max-w-[560px] text-xl leading-relaxed text-navy/80">
              Английский, немецкий и китайский языки
              <br />
              для детей и взрослых —
              <br />
              <span className="font-medium text-navy">
                учимся говорить уверенно и с удовольствием!
              </span>
            </p>

          {/* Кнопки */}
          <div className="mt-9 flex items-center gap-5">
            <ConsultationButton
              className="rounded-lg bg-orange px-7 py-4 text-base font-semibold text-white transition-all hover:brightness-95"
            >
              Записаться на бесплатную консультацию
            </ConsultationButton>

            <a
              href="#courses"
              className="rounded-lg border border-orange px-7 py-4 text-base font-semibold text-orange transition-all hover:bg-orange hover:text-white"
            >
              Посмотреть курсы →
            </a>
          </div>
        </div>

        {/* Правая часть */}
        <div className="grid grid-cols-[300px_450px] items-center justify-end">

          {/* Сорока */}
          <div className="flex w-[350px] items-start justify-center">
              <Image
                src="/images/logo/soroka_dialogue.png"
                alt=""
                width={320}
                height={360}
                className="relative -left-20 -top-10 h-auto w-[350px] object-contain"
              />
          </div>

          {/* Фотография */}
          <div className="relative h-[500px] w-[450px] overflow-hidden rounded-2xl">
            <Image
              src="/images/photo/sorokina.jpg"
              alt='Сорокина Наталья Валерьевна, директор и основатель языкового центра "Сорока"'
              fill
              className="object-cover object-[center_40%]"
            />
          </div>
        </div>
      </div>

      {/* Декоративная волна */}
      <div className="relative h-24 overflow-hidden">
        <div className="absolute -bottom-14 left-[-5%] h-32 w-[110%] rounded-[50%] bg-[#0E6B6F]" />
      </div>

    </section>
  );
}