import { useSelector } from "react-redux";
import useWindowSize from "../../../store/window";
import "./Investments.scss";
import invest1 from "../../../assets/img/investment1.png";
import invest2 from "../../../assets/img/investment2.png";
import Button from "../../button/Button";

const INVESTTEXT = [
  {
    title: "Инвестиции в недвижимость в Дубае",
    subtitle: [
      "Недвижимость в Дубае предоставляет отличные возможности для получения стабильного дохода и увеличения капитала",
      "Полный цикл инвестиций: От анализа рынка и подбора объектов до управления инвестициями и их реализации.",
      "Наши эксперты помогут вам на всех этапах инвестиционного процесса, обеспечивая высокое качество обслуживания и надежность.",
      "Наши услуги включают управление вашей инвестиционной недвижимостью, обеспечивая её сохранность и стабильный доход. Мы берем на себя все аспекты управления, включая подбор и проверку арендаторов, техническое обслуживание, финансовую отчетность и юридическую поддержку.",
    ],
  },
  {
    title: "Investment in real estate in Dubai",
    subtitle: [
      "Real estate in Dubai provides excellent opportunities for obtaining a stable income and increasing capital",
      "Full cycle of investments: From analysis of the market and selection of objects to management of investment and its realization.",
      "Our experts will help you on all the stages of investment process, ensuring high quality service and reliability.",
      "Our services include managing your investment property, ensuring its safety and stable income. We take care of all aspects of management, including tenant selection and screening, maintenance, financial reporting and legal support.",
    ],
  },
];
function Investments() {
  const language = useSelector((state) => state.language);
  const { width } = useWindowSize();
  return (
    <section className="invest" id="invest">
      <div className="wrapper">
        <div className="invest-text">
          <h2>{INVESTTEXT[language].title}</h2>

          {INVESTTEXT[language].subtitle.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
          {width <= 768 && (
            <div className="invest-image">
              <img src={invest1} alt="building" className="invest-img1" />
              <img src={invest2} alt="building" className="invest-img2" />
            </div>
          )}
          <Button text={language === 0 ? "Подробнее" : "Learn more"} />
        </div>
        {width > 768 && (
          <div className="invest-image">
            <img src={invest1} alt="building" className="invest-img1" />
            <img src={invest2} alt="building" className="invest-img2" />
          </div>
        )}
      </div>
    </section>
  );
}

export default Investments;
