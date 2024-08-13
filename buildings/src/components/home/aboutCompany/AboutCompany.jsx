import { useSelector } from "react-redux";
import { useState } from "react";
import "./AboutCompany.scss";
import aboutCompany1 from "../../../assets/img/aboutCompanyFirst.png";

const ABOUTCOMPANY = [
  [
    {
      title: "Аренда",
      subtitle: [
        "Широкий выбор объектов: Мы предлагаем разнообразные варианты аренды – от квартир и домов до коммерческих помещений, удовлетворяющие любые потребности.",
        "Надежные арендаторы: Проведение тщательной проверки и отбора арендаторов для обеспечения стабильного дохода и минимизации рисков",
      ],
    },
    {
      title: "Купля-продажа",
      subtitle: [
        "Купля-продажа — это важный процесс, который обеспечивает обмен товарами и услугами между продавцами и покупателями.",
        "В современных условиях купля-продажа может осуществляться как в офлайн-магазинах, так и через интернет-платформы, что значительно упрощает доступ к товарам.",
      ],
    },
    {
      title: "Управление",
      subtitle: [
        "Управление — это ключевая функция в организации, обеспечивающая координацию ресурсов и достижение поставленных целей.",
        "Эффективное управление требует не только стратегического мышления, но и навыков работы с командой для достижения максимальных результатов.",
      ],
    },
  ],
  [
    {
      title: "Rentals",
      subtitle: [
        "Wide selection of objects: We offer various styles of rental – from flats and houses to commercial spaces, meeting any needs.",
        "Reliable tenants: The process of thorough inspection and selection of tenants for stability and minimization of risks",
      ],
    },
    {
      title: "Buy and sell",
      subtitle: [
        "Buy and sell is an important process that ensures the exchange of goods and services between buyers and sellers.",
        "In modern times, buy and sell can operate as an online marketplace or through online platforms, which significantly reduces access to goods.",
      ],
    },
    {
      title: "Management",
      subtitle: [
        "Management is a key function in the organization, providing coordination of resources and achieving the desired goals.",
        "Effective management requires strategic thinking and skills of working with the team to achieve maximum results.",
      ],
    },
  ],
];
function AboutCompany() {
  const language = useSelector((state) => state.language);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <section className="about-company">
      <div className="wrapper">
        <div className="about-company__area">
          <h2>
            О компании<br></br>
            <span>RMC DE LUXE</span>
          </h2>
          <div className="about__company__text">
            <div className="about__company__title">
              {ABOUTCOMPANY[language].map((item, index) => {
                return (
                  <span
                    key={index}
                    onClick={() => handleClick(index)}
                    className={activeIndex === index ? "active" : ""}
                  >
                    {item.title}
                  </span>
                );
              })}
            </div>
            <div className="about__company__subtitle">
              {ABOUTCOMPANY[language][activeIndex].subtitle.map(
                (item, index) => {
                  return <p key={index}>{item}</p>;
                }
              )}
            </div>
          </div>
          <div className="about-company__slider">
            <img src={aboutCompany1} alt="company building" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCompany;
