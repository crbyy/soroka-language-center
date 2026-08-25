import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ConsultationButton from "../components/ConsultationButton";

const courses = [
  {
    image: "/images/courses/preschool_page.png",
    title: "Английский для дошкольников",
    age: "4–5 лет",
    price: "5 250 ₽ / месяц",

    paragraphs: [
      <>
        Курс &quot;I can sing&quot; по системе В.Н. Мещеряковой{" "}
        &quot;I love English&quot; основан на принципе естественного
        обучения языкам: &quot;Сначала слушаю, потом говорю&quot;.
      </>,

      <>
        Дети ежедневно прослушивают короткие аудиоуроки дома, смотрят
        мультфильмы и играют на интерактивной платформе сайта{" "}
        <a
          href="https://promo.mirgovorit.ru/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-orange hover:underline"
        >
          Мирговорит
        </a>
        . За счет этого они начинают понимать английскую речь на слух,
        непроизвольно запоминают слова и легко используют их в речи на
        уроке.
      </>,

      <>
        В программе много песенок и игр, соответствующих возрасту детей.
        Занятия проходят 2 раза в неделю и длятся 40–45 минут.
      </>,

      <>
        Учебный комплект не входит в стоимость занятий и приобретается
        родителями дополнительно.
      </>,
    ],

    vkLinks: [
      {
        label: "Посмотреть результат в VK",
        url: "https://vk.ru/wall-216504401_509",
      },
      {
        label: "Ещё одно видео в VK",
        url: "https://vk.ru/wall-216504401_170",
      },
    ],
  },

  {
    image: "/images/courses/school_page.png",
    title: "Английский для младших школьников",
    age: "6–9 лет",
    price: "5 250 ₽ / месяц",

    paragraphs: [
      <>
        Курс английского по системе В.Н. Мещеряковой &quot;I love
        English&quot; основан на принципе естественного обучения языкам:
        &quot;Сначала слушаю, потом говорю&quot;.
      </>,

      <>
        Дети ежедневно прослушивают короткие аудио- и видеоуроки дома,
        играют на интерактивной платформе{" "}
        <a
          href="https://promo.mirgovorit.ru/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-orange hover:underline"
        >
          Мирговорит
        </a>
        . За счет этого они хорошо понимают английскую речь на слух,
        непроизвольно запоминают слова и легко используют их в речи на
        уроке.
      </>,

      <>
        Занятия проходят 2 раза в неделю и длятся 60 минут. С 14 урока и
        дети, и учитель говорят только по-английски. Через 1–1,5 года
        занятий дети могут вести часовую беседу с носителем языка в группе.
      </>,

      <>
        Со второй ступени и выше дети учатся читать и писать. Возможно
        онлайн-обучение, стоимость которого может отличаться.
      </>,

      <>
        Учебный комплект не входит в стоимость занятий и приобретается
        родителями дополнительно.
      </>,
    ],

    vkLinks: [
      {
        label: "Посмотреть результат в VK",
        url: "https://vk.ru/wall-216504401_502",
      },
      {
        label: "Посмотреть клип в VK",
        url: "https://vk.ru/clip-216504401_456239430",
      },
    ],
  },

  {
    image: "/images/courses/teens_page.png",
    title: "Английский для подростков",
    age: "11–15 лет",
    price: "5 250 ₽ / месяц",

    paragraphs: [
      <>
        Занятия проходят на основе современных коммуникативных британских
        учебников с использованием большого количества интерактивных игр и
        мультфильмов, соответствующих возрасту детей.
      </>,

      <>
        Дети наращивают словарный запас, совершенствуют грамматические
        навыки, развивают умения аудирования, чтения, устной и письменной
        речи, включая орфографию.
      </>,

      <>
        Занятия проходят 2 раза в неделю и длятся 60 минут. Учебный комплект
        не входит в стоимость занятий и приобретается родителями
        дополнительно. Возможно онлайн-обучение, стоимость которого может
        отличаться.
      </>,
    ],

    vkLinks: [
      {
        label: "Посмотреть клип в VK",
        url: "https://vk.ru/clip-216504401_456239437",
      },
    ],
  },

  {
    image: "/images/courses/adults_page.png",
    title: "Английский для взрослых и подростков с 15 лет",
    age: "от 15 лет",
    price: "5 900 ₽ / месяц",

    paragraphs: [
      <>
        Курс разговорного английского рассчитан на 9–10 месяцев и разработан
        на базе системы В.Н. Мещеряковой &quot;I love English&quot;.
      </>,

      <>
        Он основан на принципе естественного обучения языкам:
        &quot;Сначала слушаю, потом говорю&quot; и предполагает ежедневное
        прослушивание аудиоуроков дома. За счет этого развивается понимание
        речи на слух, непроизвольно запоминаются слова, которые затем легко
        используются в речи на уроке.
      </>,

      <>
        Занятия проходят 1 раз в неделю и длятся 120 минут с перерывом.
        Используется метод погружения: после первого месяца обучения и
        учащиеся, и учитель говорят только по-английски.
      </>,

      <>
        Возможно онлайн-обучение, стоимость которого может отличаться.
      </>,
    ],

    vkLinks: [
      {
        label: "Посмотреть видео в VK",
        url: "https://vk.ru/video114887644_456239842?list=3b0af951167320d7be",
      },
      {
        label: "Посмотреть клип в VK",
        url: "https://vk.ru/clip-216504401_456239437",
      },
    ],
  },

  {
    image: "/images/courses/chinese_page.png",
    title: "Китайский язык",
    age: "для детей и взрослых",
    price: "5 900 ₽ / месяц",

    paragraphs: [
      <>
        Курс направлен на освоение азов китайского языка, его письменности и
        разговорной речи, формирование лексико-грамматических навыков и
        развитие всех речевых умений.
      </>,

      <>
        Есть программы для детей и взрослых. Занятия проходят 2 раза в
        неделю и длятся 60 минут.
      </>,
    ],

    vkLinks: [],
  },

  {
    image: "/images/courses/individual.png",
    title: "Индивидуальные занятия",
    age: "английский, немецкий, китайский",
    price: "от 1 400 до 2 500 ₽ / час",

    paragraphs: [
      <>
        Программа составляется под запрос клиента. Это может быть подготовка
        к ОГЭ, ЕГЭ, международным экзаменам, помощь с домашними заданиями,
        разговорная практика и другие задачи.
      </>,

      <>
        Занятия, как правило, длятся 60 минут. Стоимость зависит от программы
        подготовки.
      </>,

      <>
        Если для занятий ученику необходим учебный комплект, он приобретается
        дополнительно. Возможно онлайн-обучение, стоимость которого может
        отличаться.
      </>,
    ],

    vkLinks: [],
  },

  {
    image: "/images/courses/teachers_page.png",
    title: "Для учителей и студентов",
    age: "методика преподавания иностранных языков",
    price: "Стоимость рассчитывается индивидуально",

    paragraphs: [
      <>
        Мы проводим курсы повышения квалификации учителей иностранного языка,
        семинары, практики и стажировки по коммуникативной методике обучения.
      </>,

      <>
        Также проводим научные консультации по исследованиям и написанию
        квалификационных работ: ВКР, курсовых, диссертаций, научных статей и
        монографий.
      </>,

      <>
        Преподаватель-консультант — доктор педагогических наук по специальности
        «Теория и методика обучения иностранным языкам», доцент Сорокина
        Наталья Валерьевна.
      </>,
    ],

    vkLinks: [
      {
        label: "Посмотреть материал в VK",
        url: "https://vk.com/video114887644_456239926?list=589982b8ca53ba4e21",
      },
      {
        label: "Посмотреть клип в VK",
        url: "https://vk.ru/clip-216504401_456239435",
      },
    ],
  },
];

export default function CoursesPage() {
  return (
    <>
      <Header />

      <main className='bg-[#FFF8EE]'>
        {/* Заголовок страницы */}
        <section className="bg-white px-6 py-14">
          <div className="mx-auto max-w-[1200px] text-center">
            <h1 className="text-4xl font-bold leading-tight text-navy md:text-5xl">
              Наши <span className="text-orange">курсы</span>
            </h1>

            <p className="mx-auto mt-5 max-w-[760px] text-lg leading-relaxed text-gray-500">
              Программы для детей, подростков и взрослых — от первого
              знакомства с языком до разговорной практики и индивидуальной
              подготовки.
            </p>
          </div>
        </section>

        {/* Курсы */}
        <section className="px-6 py-14">
          <div className="mx-auto max-w-[1200px] space-y-20">
            {courses.map((course, index) => (
              <article
                key={course.title}
                className="grid items-start gap-12 lg:grid-cols-2"
              >
                {/* Фото */}
                <div
                  className={`relative h-[420px] overflow-hidden rounded-2xl bg-gray-100 ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Информация */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="text-sm font-semibold uppercase tracking-wide text-orange">
                    {course.age}
                  </p>

                  <h2 className="mt-3 text-3xl font-bold leading-tight text-navy">
                    {course.title}
                  </h2>

                  {/* Описание */}
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-600">
                    {course.paragraphs.map((paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className="text-justify"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Цена */}
                  <div className="mt-7 inline-flex rounded-xl bg-white px-5 py-4 shadow-[0_6px_24px_rgba(0,0,0,0.06)]">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-gray-400">
                        Стоимость
                      </p>

                      <p className="mt-1 text-lg font-bold text-navy">
                        {course.price}
                      </p>
                    </div>
                  </div>

                  {/* VK */}
                  {course.vkLinks.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {course.vkLinks.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-lg border border-navy px-4 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-white"
                        >
                          {link.label} →
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-[1200px] rounded-2xl bg-[#0F7377] px-8 py-12 text-center text-white">
            <h2 className="text-3xl font-bold">
              Не знаете, какой курс выбрать?
            </h2>

            <p className="mx-auto mt-4 max-w-[650px] text-base leading-relaxed text-white/80">
              Запишитесь на бесплатную консультацию. Мы ответим на вопросы и
              поможем подобрать подходящую программу.
            </p>

            <ConsultationButton
              className="mt-7 rounded-lg bg-orange px-7 py-4 text-base font-semibold text-white transition-all hover:brightness-95"
            >
              Записаться на бесплатную консультацию
            </ConsultationButton>
          </div>
        </section>

        {/* Фиксированная кнопка */}
        <div className="fixed bottom-6 right-6 z-40">
          <ConsultationButton
            className="rounded-xl bg-orange px-6 py-4 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)] transition-all hover:brightness-95"
          >
            Записаться на консультацию
          </ConsultationButton>
        </div>
      </main>

      <Footer />
    </>
  );
}