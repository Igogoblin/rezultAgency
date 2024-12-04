import { useSelector } from "react-redux";
import checkMark from "../../../assets/icon/Checkmark.svg";
import "./property.scss";

const PROPERTY = [
  {
    title: "Что входит в услугу управления недвижимостью",
    subtitle: [
      "Проверка арендаторов (кредитная история, рекомендации)",
      "Регулярное техническое обслуживание",
      "Подготовка и подписание договоров аренды",
      "Организация и проведение ремонтных работ",
      "Сбор арендной платы",
      "Контроль за состоянием недвижимости",
      "Обработка запросов и жалоб арендаторов",
      "Подбор надежных арендаторов",
      "Контроль соблюдения условий аренды",
    ],
  },
  {
    title: "What is included in the property management service",
    subtitle: [
      "Check for tenants (credit history, recommendations)",
      "Regular maintenance of the property",
      "Prepare and sign rental contracts",
      "Organization and conducting of repairs",
      "Collect rental fees",
      "Process requests and complaints of tenants",
      "Selection of reliable tenants",
      "Control on the conditions of rental",
    ],
  },
];

function Property() {
  const language = useSelector((state) => state.language);
  return (
    <section className="property">
      <div className="wrapper">
        <div className="property__area">
          <h2>{PROPERTY[language].title}</h2>
          <div className="property__text">
            {PROPERTY[language].subtitle.map((item, index) => {
              return (
                <div key={index} className="property__item">
                  <img src={checkMark} alt="checkmark" />
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Property;
