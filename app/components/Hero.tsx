import Image from "next/image";
import ConsultationButton from "./ConsultationButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">

      <div
        className="
          mx-auto grid max-w-[1440px]
          grid-cols-1
          items-center
          gap-10
          px-5 py-10
          sm:px-8
          lg:grid-cols-2 lg:gap-12 lg:px-10
        "
      >

        {/* Левая часть */}
        <div className="relative z-10">

          {/* Заголовок */}
          <h1
            className="
              max-w-[650px]
              text-4xl
              font-bold
              leading-[1.05]
              tracking-tight
              text-navy
              sm:text-5xl
              lg:text-6xl
            "
          >
            Открой дверь
            <br />
            в большой и
            <br />
            <span className="text-orange">интересный</span> мир
          </h1>

          {/* Подзаголовок */}
          <p
            className="
              mt-6
              max-w-[560px]
              text-[17px]
              leading-relaxed
              text-navy/80
              sm:text-lg
              lg:text-xl
            "
          >
            Английский, немецкий и китайский языки
            <br className="hidden sm:block" />
            {" "}
             для детей и взрослых —
            <br className="hidden sm:block" />
            {" "}
            <span className="font-medium text-navy">
              учимся говорить уверенно и с удовольствием!
            </span>
          </p>

          {/* Кнопки */}
          <div
            className="
              mt-8
              flex
              flex-col
              gap-3
              sm:flex-row sm:items-center sm:gap-5
              lg:mt-9
            "
          >
            <ConsultationButton
              className="
                w-full
                rounded-lg
                bg-orange
                px-6 py-4
                text-center
                text-sm
                font-semibold
                text-white
                transition-all
                hover:brightness-95
                sm:w-auto sm:px-7 sm:text-base
              "
            >
              Записаться на бесплатную консультацию
            </ConsultationButton>

            <a
              href="#courses"
              className="
                flex
                w-full
                items-center
                justify-center
                rounded-lg
                border
                border-orange
                px-6 py-4
                text-sm
                font-semibold
                text-orange
                transition-all
                hover:bg-orange
                hover:text-white
                sm:w-auto sm:px-7 sm:text-base
              "
            >
              Посмотреть курсы →
            </a>
          </div>
        </div>

        {/* Правая часть */}
        <div
          className="
            flex
            w-full
            justify-center
            lg:grid
            lg:grid-cols-[300px_450px]
            lg:items-center
            lg:justify-end
          "
        >

          {/* Сорока — только desktop */}
          <div className="hidden lg:flex lg:w-[350px] lg:items-start lg:justify-center">
            <Image
              src="/images/logo/soroka_dialogue.png"
              alt=""
              width={320}
              height={360}
              className="
                relative
                -left-20
                -top-10
                h-auto
                w-[350px]
                object-contain
              "
            />
          </div>

          {/* Фотография */}
          <div
            className="
              relative
              h-[420px]
              w-full
              max-w-[450px]
              overflow-hidden
              rounded-2xl
              sm:h-[480px]
              lg:h-[500px] lg:w-[450px]
            "
          >
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
      <div className="relative h-16 overflow-hidden sm:h-20 lg:h-24">
        <div
          className="
            absolute
            -bottom-14
            left-[-5%]
            h-32
            w-[110%]
            rounded-[50%]
            bg-[#0E6B6F]
          "
        />
      </div>

    </section>
  );
}