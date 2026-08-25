import Image from "next/image";


export default function Footer() {
  return (
    <footer className="bg-[#0F7377] text-white">
      <div className="mx-auto max-w-[1440px] px-8 py-8">

        {/* Основная часть */}
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">

          {/* Левая часть */}
          <div className="grid gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1fr]">

            {/* Логотип и описание */}
            <div>
              <Image
                src="/images/logo/soroka_text_logo.svg"
                alt="Языковой центр «Сорока»"
                width={230}
                height={130}
                className="h-auto w-[230px]"
              />

              <p className="mt-5 max-w-[280px] text-sm leading-relaxed text-white/80">
                Языковой центр «Сорока» —
                английский, немецкий и китайский
                для детей и взрослых.
              </p>
            </div>

            {/* Навигация */}
            <div>
              <h3 className="text-base font-bold">
                Навигация
              </h3>

              <nav className="mt-5 flex flex-col gap-3 text-sm text-white/80">
                <a
                  href="/courses"
                  className="transition-colors hover:text-orange"
                >
                  Курсы
                </a>

                <a
                  href="/about"
                  className="transition-colors hover:text-orange"
                >
                  О нас
                </a>

              </nav>
            </div>

            {/* Контакты */}
            <div id="contacts">
              <h3 className="text-base font-bold">
                Контакты
              </h3>

              <div className="mt-5 flex flex-col gap-3 text-sm text-white/80">
                <a

                  className="transition-colors hover:text-orange"
                >
                  +7 (914) 136-51-12
                </a>

                <a

                  className="transition-colors hover:text-orange"
                >
                  sorokinachita@mail.ru
                </a>

                <a
                  className="transition-colors hover:text-orange"
                  href='https://go.2gis.com/GFD4o' target='_blank'
                >
                  г.Чита, ул. Нечаева, 68
                </a>
              </div>
            </div>

          </div>



          {/* Карта */}
            <div className="h-[220px] w-[520px] overflow-hidden rounded-2xl">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A0c113d9343af8dfad9f4197990845beb9d0602c2a13e151adac73f94775bba44"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Языковой центр «Сорока» на карте"
                className="block h-full w-full border-0"
              />
            </div>
        </div>


        {/* Нижняя часть */}
        <div className="mt-8 border-t border-white/20 pt-2">
          <div className="flex flex-col gap-3 text-sm text-white/60 md:flex-row md:items-center md:justify-between">

            <p>
              © 2026 Языковой центр «Сорока» <br/>
                <span className='text-xs text-white/50'>
                  ИП Сорокина Наталья Валерьевна <br/>
                  ИНН  753600497743 <br/>
                  ОГРНИП 326750000004167 <br/>
                </span>

            </p>

            <a
              href="#privacy"
              className="transition-colors hover:text-white"
            >
              Политика конфиденциальности
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
}