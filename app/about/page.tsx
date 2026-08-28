import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ConsultationButton from "../components/ConsultationButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "О языковом центре «Сорока» в Чите",
  description:
    "История, миссия и подход к обучению в языковом центре «Сорока» в Чите.",
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className='bg-[#FFF8EE]'>
        {/* Заголовок */}
        <section className="bg-white px-6 py-14">
          <div className="mx-auto max-w-[1200px] text-center">
            <p className="text-sm font-medium uppercase tracking-wide text-navy/60">
              О языковом центре
            </p>

            <h1 className="mt-3 text-4xl font-bold leading-tight text-navy md:text-5xl">
              Наша история и{" "}
              <span className="text-orange">миссия</span>
            </h1>

            <p className="mx-auto mt-5 max-w-[700px] text-lg leading-relaxed text-gray-500">
              История создания языкового центра «Сорока» и человека,
              который стоит у его истоков.
            </p>
          </div>
        </section>

        {/* История */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid items-start gap-12 lg:grid-cols-[420px_1fr]">

              {/* Левая часть */}
              <div className="lg:sticky lg:top-8">

                {/* Фото */}
                <div className="relative h-[520px] overflow-hidden rounded-2xl bg-gray-100">
                  <Image
                    src="/images/photo/sorokina0.jpg"
                    alt="Сорокина Наталья Валерьевна, основатель языкового центра «Сорока»"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Подпись */}
                <div className="mt-5">
                  <h2 className="text-xl font-bold text-navy">
                    Сорокина Наталья Валерьевна
                  </h2>

                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    Основатель языкового центра «Сорока», доктор
                    педагогических наук, доцент.
                  </p>
                </div>
              </div>

              {/* Правая часть */}
              <div>
                <h2 className="text-3xl font-bold leading-tight text-navy">
                  Как появилась{" "}
                  <span className="text-orange">«Сорока»</span>
                </h2>

                <div className="mt-7 space-y-5 text-base leading-relaxed text-gray-600">

                  <p className="text-justify">
                    Расскажу Вам историю создания нашего языкового центра.
                    Я преподаватель английского, немецкого языков с
                    29-летним стажем работы, доктор педагогических наук,
                    доцент, индивидуальный предприниматель, автор более
                    80 научных публикаций, включая 2 монографии.
                    Многократно проходила стажировки в Москве и в ФРГ.
                  </p>

                  <p className="text-justify">
                    Преподавала в основном на факультете иностранных языков
                    Забайкальского государственного университета, сейчас
                    тоже веду там занятия в должности профессора кафедры
                    европейских языков и лингводидактики.
                  </p>

                  <p className="text-justify">
                    Несколько лет работала в Германии в Кассельском,
                    Марбургском и Геттингенском университетах, преподавала
                    немецкий язык иностранцам и методику студентам DaF.
                  </p>

                  <p className="text-justify">
                    Более трех лет была руководителем подготовительного
                    отделения Института межкультурной коммуникации при
                    Геттингенском университете. Эта должность предполагала
                    совмещение ролей менеджера, методиста и завуча в одном
                    лице.
                  </p>

                  <p className="text-justify">
                    Мы готовили абитуриентов со всего мира к сдаче экзамена
                    по немецкому языку для поступления в вузы Германии
                    на уровень C1.
                  </p>

                  <p className="text-justify">
                    Там у меня и возникла идея создания своей языковой школы,
                    но я ее видела именно в России. За державу мне бывает
                    очень обидно в плане иностранных языков, потому что очень
                    многие их вообще не знают и чувствуют себя некомфортно
                    из-за этого.
                  </p>

                  <p className="text-justify">
                    Вот и вернулась я на Родину и в 2020 году создала
                    языковой центр «Сорока».
                  </p>

                  <p className="text-justify">
                    Моя страсть — это общение с представителями разных
                    культур и путешествия. Я побывала в нескольких странах
                    Европы, Азии и Африки.
                  </p>

                  <p className="text-justify">
                    Знание языков невероятно обогатило мою жизнь. Было столько
                    интересных знакомств, возможностей карьерного роста и
                    доступа к актуальной научной информации, зарубежных
                    стажировок, столько удовольствия от чтения книг в
                    оригинале — все благодаря знанию языков.
                  </p>

                  <p className="text-justify">
                    Хочется, чтобы все россияне могли свободно общаться без
                    языкового барьера и посредников.
                  </p>

                </div>

                {/* Миссия */}
                <div className="mt-10 rounded-2xl bg-[#0F7377] p-8 text-white">
                  <p className="text-sm font-medium uppercase tracking-wide text-white/70">
                    Наша миссия
                  </p>

                  <p className="mt-4 text-2xl font-bold leading-relaxed">
                    Через язык мы открываем нашим ученикам дверь в большой
                    и интересный мир и дарим радость общения с людьми
                    из разных стран!
                  </p>

                  <p className="mt-4 text-base leading-relaxed text-white/80">
                    Это наша миссия и смысл нашей работы.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-[1200px] rounded-2xl bg-white px-8 py-10 text-center shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
            <h2 className="text-3xl font-bold text-navy">
              Хотите познакомиться с «Сорокой» ближе?
            </h2>

            <p className="mx-auto mt-4 max-w-[650px] text-base leading-relaxed text-gray-500">
              Запишитесь на бесплатную консультацию — расскажем о программах
              и поможем подобрать подходящий формат обучения.
            </p>

            <ConsultationButton
              className="mt-7 rounded-lg bg-orange px-7 py-4 text-base font-semibold text-white transition-all hover:brightness-95"
            >
              Записаться на бесплатную консультацию
            </ConsultationButton>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}