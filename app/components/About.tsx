import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="px-6 py-16">
      <div className="mx-auto max-w-[1200px]">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Фотография */}
          <div className="relative h-[420px] overflow-hidden rounded-2xl">
              <Image
                src="/images/photo/about_main.jpg"
                alt="Языковой центр «Сорока»"
                fill
                className="object-cover"
              />
          </div>

          {/* Текст */}
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-navy/60">
              О языковом центре
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-navy md:text-4xl">
              Языки, которые открывают
              <br />
              <span className="text-orange">новые возможности</span>
            </h2>

            <p className="mt-6 text-justify text-base leading-relaxed text-gray-600">
              Единственный в Чите центр под руководством доктора педагогических наук
              по специальности "Теория и методика обучения иностранным языкам" с 29-летним стажем преподавания.
            </p>

            <p className="mt-4 text-justify text-base leading-relaxed text-gray-600">
              В языковом центре «Сорока» мы помогаем
              детям и взрослым изучать иностранные языки уверенно, интересно и
              с удовольствием.
            </p>

            <p className="mt-4 text-justify text-base leading-relaxed text-gray-600">
              Мы обучаем английскому, немецкому и
              китайскому языкам, создавая и поддерживая комфортную атмосферу
              для обучения и общения.
            </p>

            <p className="mt-4 text-justify text-base leading-relaxed text-gray-600">
              Наша задача — не просто научить правилам и словам,
              а помочь человеку действительно заговорить на
              иностранном языке и не бояться использовать его
              в жизни.
            </p>

            <a
              href="/about"
              className="mt-7 inline-flex items-center rounded-lg bg-orange px-6 py-3 text-sm font-semibold text-white transition-all hover:brightness-95"
            >
              Узнать больше
              <span className="ml-2">→</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}