import { useSelector } from "react-redux";
import advatages1 from "../../../assets/img/advantages1.png";
import advatages2 from "../../../assets/img/advantages2.png";
import advatages3 from "../../../assets/img/advantages3.png";
import advatages4 from "../../../assets/img/advantages4.png";
import "./advantages.scss";
import useWindowSize from "../../../store/window";

const ADVANTAGES = [
  [
    {
      title: "Опыт и профессионализм",
      subtitle:
        "Наши специалисты имеют многолетний опыт в различных сферах недвижимости, что гарантирует высокое качество услуг",
    },
    {
      way: advatages1,
    },
    {
      title: "Прозрачность и доверие",
      subtitle:
        "Обеспечение полной прозрачности всех операций и предоставление отчетов. Работа основана на принципах честности и доверия, что подтверждается отзывами",
    },
    {
      way: advatages2,
    },
    {
      title: "Высокий уровень обслуживания",
      subtitle: "Мы всегда на связи, чтобы помочь вам в любое время",
    },
    {
      way: advatages3,
    },
    {
      title: "Индивидуальный подход",
      subtitle:
        "Мы разрабатываем персонализированные решения, учитывая уникальные потребности каждого клиента",
    },
    {
      way: advatages4,
    },
    {
      title: "Комплексное обслуживание",
      subtitle:
        "Полный спектр услуг, включающий аренду, куплю-продажу, управление и инвестиции в недвижимость.",
    },
  ],
  [
    {
      title: "Experience and professionalism",
      subtitle:
        "Our specialists have over a decade of experience in various areas of real estate, which guarantees high quality of services",
    },
    {
      way: advatages1,
    },
    {
      title: "Transparent and trust",
      subtitle:
        "We provide full transparency of all operations and provide reports. The work is based on principles of honesty and trust, which is verified by feedbacks",
    },
    {
      way: advatages2,
    },
    {
      title: "High level of service",
      subtitle: "We always on the phone to help you in any time",
    },
    {
      way: advatages3,
    },
    {
      title: "Individual approach",
      subtitle:
        "We develop personalized solutions, considering unique needs of each client",
    },
    {
      way: advatages4,
    },
    {
      title: "Complex service",
      subtitle:
        "Full spectrum of services, including rent, purchase, management and investment in real estate.",
    },
  ],
];
const ADVANTAGESTITLE = ["Наши преимущества", "Our advantages"];
function Advantages() {
  const language = useSelector((state) => state.language);
  const { width } = useWindowSize();
  return (
    <section className="advantages">
      <div className="wrapper">
        <h2>{ADVANTAGESTITLE[language]}</h2>
        <div className="advantages__area">
          {ADVANTAGES[language].map((item, index) => {
            let renderIndex;

            width > 1500 || width <= 600
              ? (renderIndex = index)
              : (renderIndex =
                  index === 2
                    ? 3
                    : index === 3
                    ? 2
                    : index === 6
                    ? 7
                    : index === 7
                    ? 6
                    : index);
            const currentItem = ADVANTAGES[language][renderIndex];
            return (
              <div className="advantages__item" key={index}>
                {renderIndex % 2 === 0 ? (
                  <div className="advantages__text">
                    <h4>{currentItem.title}</h4>
                    <p>{currentItem.subtitle}</p>
                  </div>
                ) : (
                  <img
                    src={currentItem.way}
                    alt="advantages"
                    className="advantages__img"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Advantages;
