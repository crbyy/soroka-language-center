import Image from "next/image";

const courses = [
  {
    image: "/images/courses/preschool.png",
    title: "Английский\nдля дошкольников",
    age: "4-5 лет",
    price: "5 550 ₽",
  },
  {
    image: "/images/courses/school.png",
    title: "Английский\nдля младших школьников",
    age: "6-9 лет",
    price: "5 550 ₽",
  },
  {
    image: "/images/courses/teens.png",
    title: "Английский\nдля подростков",
    age: "11–15 лет",
    price: "5 550 ₽",
  },
  {
    image: "/images/courses/adults.png",
    title: "Английский\nдля взрослых и подростков",
    age: "от 15 лет",
    price: "6 400 ₽",
  },

//   {
//     image: "/images/courses/german.jpg",
//     title: "Китайский\nязык",
//     age: "для детей и взрослых",
//   },
];

export default function Courses() {
  return (
    <section id="courses" className="px-6 py-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-8 xl:grid-cols-[220px_1fr]">

          {/* Заголовок блока */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-medium uppercase tracking-wide text-navy/60">
              Наши курсы
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-navy">
              Выберите курс
              <br />
              <span className="text-orange">для себя</span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              У нас есть программы для детей,
              подростков и взрослых с любым
              уровнем подготовки.
            </p>

            <a
              href="/courses"
              className="mt-6 inline-flex w-fit items-center rounded-lg border border-navy px-5 py-3 text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-white"
            >
              Все курсы
              <span className="ml-2">→</span>
            </a>
          </div>

          {/* Карточки */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((course) => (
              <div
                  key={course.title}
                  className="overflow-hidden rounded-2xl bg-[#f1eeee]"
                >
                  <div className="relative h-[260px]">
                    <Image
                      src={course.image}
                      alt={course.title.replace("\n", " ")}
                      fill
                      unoptimized={course.image === "/images/courses/adults.png"}
                      className="object-cover object-[center_20%]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <h3 className="whitespace-pre-line text-xl font-bold leading-tight">
                        {course.title}
                      </h3>

                      <p className="mt-2 text-sm text-white/90">
                        {course.age}
                      </p>
                    </div>
                  </div>

                  {/* Цена */}
                  <div className="flex items-center justify-between bg-white px-5 py-3">
                    <span className="text-sm text-gray-500">
                      Стоимость
                    </span>

                    <span className="text-base font-bold text-navy">
                      {course.price}
                    </span>
                  </div>
                </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}