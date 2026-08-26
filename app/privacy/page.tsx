import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main className="px-6 py-16">
        <div className="mx-auto max-w-[1000px]">

          <div className="mb-12">
            <p className="text-sm font-medium uppercase tracking-wide text-navy/60">
              Документы
            </p>

            <h1 className="mt-3 text-4xl font-bold leading-tight text-navy md:text-5xl">
              Согласие на обработку{" "}
              <span className="text-orange">
                персональных данных
              </span>
            </h1>
          </div>

          <article className="rounded-2xl bg-white px-8 py-10 shadow-[0_8px_30px_rgba(0,0,0,0.05)] md:px-12">

            <div className="space-y-6 text-justify text-sm leading-[1.85] text-gray-600 md:text-base">

              <p>
                Настоящим даю согласие на обработку моих персональных данных
                ИП Сорокиной Наталье Валерьевне, ОГРНИП: 326750000004167,
                ИНН 753600497743, с адресом местонахождения: г. Чита,
                ул. Нечаева, 68 (далее – «ИП Сорокина Н.В.»), а также
                подтверждаю, что предоставляю данное согласие в своих интересах
                либо в интересах представляемого на законных основаниях
                несовершеннолетнего лица.
              </p>

              <section>
                <h2 className="mb-4 text-xl font-bold text-navy">
                  Согласие распространяется на следующие категории данных,
                  включая персональные данные:
                </h2>

                <ul className="list-disc space-y-2 pl-6">
                  <li>фамилия, имя, отчество;</li>
                  <li>номер телефона;</li>
                  <li>адрес электронной почты.</li>
                </ul>
              </section>

              <p>
                Согласие на обработку персональных данных предоставляется
                с целью получения консультации по услугам, оказываемым
                ИП Сорокиной Н.В.
              </p>

              <section>
                <h2 className="mb-4 text-xl font-bold text-navy">
                  Я проинформирован(а) и выражаю согласие со следующими
                  условиями обработки моих данных, включая персональные:
                </h2>

                <div className="space-y-5">
                  <p>
                    <span className="font-semibold text-navy">1.</span>{" "}
                    Обработка персональных данных осуществляется
                    с использованием средств автоматизации.
                  </p>

                  <p>
                    <span className="font-semibold text-navy">2.</span>{" "}
                    Обработка персональных данных осуществляется такими
                    способами, как сбор, запись, систематизация, накопление,
                    хранение, уточнение (обновление, изменение), извлечение,
                    использование, передача (предоставление, доступ), включая
                    передачу компаниям-партнёрам, обезличивание, блокирование,
                    удаление, уничтожение персональных данных.
                  </p>

                  <p>
                    <span className="font-semibold text-navy">3.</span>{" "}
                    Обработка статистических данных (например, файлов cookies)
                    осуществляется с помощью сервисов статистики: Яндекс.
                    Метрика (https://metrika.yandex.ru), Segment.com
                    (https://segment.com), ВКонтакте (https://vk.com).
                  </p>

                  <p>
                    <span className="font-semibold text-navy">4.</span>{" "}
                    Обработка персональных данных несовершеннолетнего лица
                    осуществляется только на основании согласия его законного
                    представителя.
                  </p>
                </div>
              </section>

              <p>
                Настоящее согласие действует со дня его подписания до истечения
                сроков хранения соответствующей информации или документов,
                содержащих мои персональные данные, и может быть отозвано
                полностью или частично в любой момент по письменному запросу,
                направленному по адресу электронной почты{" "}
                <span className="font-semibold text-navy">
                  sorokinachita@mail.ru
                </span>.
              </p>

            </div>

          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}