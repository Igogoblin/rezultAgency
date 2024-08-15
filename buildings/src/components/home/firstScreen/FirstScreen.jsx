import Button from "../../button/Button";
import "./firstScreen.scss";
import arrowRight from "../../../assets/icon/arrowRight.svg";
import { useSelector } from "react-redux";

const FIRSTSCREEN = [
  {
    title: "Найдите идеальное место для жизни",
    subtitle: "Открайте двери в новое будущее с нами",
  },
  {
    title: "Find the perfect place to live",
    subtitle: "Open the doors to new futures with us",
  },
];
function FirstScreen() {
  const language = useSelector((state) => state.language);
  return (
    <section className="first-screen">
      <div className="wrapper">
        <div className="first-screen__area">
          <h1>{FIRSTSCREEN[language].title}</h1>
          <p>{FIRSTSCREEN[language].subtitle}</p>
          <Button text={language === 0 ? "Подробнее" : "Learn more"} />
        </div>
        <div className="slide-area">
          <div className="slide left">
            <img src={arrowRight} alt="top to right" />
          </div>
          <div className="slide right">
            <img src={arrowRight} alt="top to left" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstScreen;
