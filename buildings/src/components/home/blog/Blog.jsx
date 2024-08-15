import { useSelector } from "react-redux";
import blog1 from "../../../assets/img/blog1.png";
import blog2 from "../../../assets/img/blog2.png";
import blog3 from "../../../assets/img/blog3.png";
import blog4 from "../../../assets/img/blog4.png";
import Button from "../../button/Button";
import eye from "../../../assets/icon/solar_eye-line-duotone.svg";
import buttonRight from "../../../assets/icon/ion_arrow-up.svg";
import "./blog.scss";
import useWindowSize from "../../../store/window";

const BLOG = [
  [
    {
      title: "Тенденции и прогнозы рынка недвижимости на 2024 год",
      image: blog1,
    },
    {
      title: "Лучшие районы для инвестиций в недвижимость",
      image: blog2,
    },
    {
      title: "Топ-10 новых жилых комплексов",
      image: blog3,
    },
    {
      title: "Элитные апартаменты становятся всё более популярными",
      image: blog4,
    },
  ],
  [
    {
      title: "Real estate market trends and forecasts for 2024",
      image: blog1,
    },
    {
      title: "Best luxury villas for investment in real estate",
      image: blog2,
    },
    {
      title: "Top-10 newest residential complexes",
      image: blog3,
    },
    {
      title: "Elegant apartment complexes become more popular",
      image: blog4,
    },
  ],
];

function Blog() {
  const language = useSelector((state) => state.language);
  const { width } = useWindowSize();
  const itemsToShow = width > 768 ? BLOG[language].slice(0, 3) : BLOG[language];
  return (
    <section id="blog">
      <div className="wrapper">
        <div className="blog__area">
          <h2>{language === 0 ? "Блог" : "Blog"}</h2>
          <div className="blog__cards">
            {itemsToShow.map((item, index) => {
              return (
                <div key={index} className="blog__card">
                  <div className="blog__image-container">
                    <img src={item.image} alt="view" className="blog__image" />
                    <div className="blog__image__text">
                      <span>31.07.2024</span>
                      <span>
                        <img src={eye} alt="eye" /> 899
                      </span>
                    </div>
                  </div>

                  <p>{item.title}</p>
                  <div className="blog__button">
                    {language === 0 ? "Подробнее" : "Learn more"}{" "}
                    <img src={buttonRight} alt="button" />
                  </div>
                </div>
              );
            })}
          </div>
          <Button
            text={language === 0 ? "Все статьи" : "All articles"}
            link="/blog/"
          />
        </div>
      </div>
    </section>
  );
}

export default Blog;
