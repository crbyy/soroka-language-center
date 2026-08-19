import Image from "next/image";

const advantages = [
  {
    icon: "/images/icon/experience.svg",
    title: "30 лет опыта",
    description: "Успешно обучаем детей и взрослых языкам",
  },
  {
    icon: "/images/icon/book.svg",
    title: "Доктор педагогических наук",
    description: "Профессиональный подход и эффективные методики",
  },
  {
    icon: "/images/icon/communication.svg",
    title: "Общение с носителями языка",
    description: "Разговорные клубы, встречи и практика с иностранцами",
  },
  {
    icon: "/images/icon/result.svg",
    title: "Результат",
    description: "Сотни наших учеников уверенно говорят на иностранных языках и не боятся общаться",
  },
  {
    icon: "/images/icon/event.svg",
    title: "Праздники и мастер-классы",
    description: "Яркие мероприятия для детей и взрослых в течение года",
  },
  {
    icon: "/images/icon/group.svg",
    title: "Небольшие группы",
    description: "Индивидуальный подход и комфортная атмосфера",
  },
];

export default function Advantages() {
  return (
    <section className="relative z-10 -mt-1 px-6 pb-16">
      <div className="mx-auto mt-6 grid max-w-[1440px] grid-cols-1 gap-0 overflow-hidden rounded-2xl bg-white
      shadow-[0_8px_30px_rgba(0,0,0,0.08)] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 ">
        {advantages.map((advantage, index) => (
          <div
            key={advantage.title}
            className={`px-6 py-4 text-center ${
              index !== advantages.length - 1
                ? "border-b border-gray-100 xl:border-b-0 xl:border-r"
                : ""
            }`}
          >
          {/* Иконка */}
            <div className="mb-2 flex h-[50px] justify-center text-4xl">
              <Image
                  src={advantage.icon}
                  alt=''
                  width={50}
                  height={50}
              />
            </div>

            {/* Заголовок */}
            <div className="flex h-[56px] items-start justify-center">
                <h3 className="text-lg text-center font-bold leading-tight text-navy">
                  {advantage.title}
                </h3>
            </div>

            {/* Описание */}
            <div className="flex min-h-[96px] items-start justify-center">
                <p className="mt-3 text-base  leading-relaxed text-gray-500">
                  {advantage.description}
                </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}