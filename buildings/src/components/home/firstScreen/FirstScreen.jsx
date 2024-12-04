import Button from "../../button/Button";
import "./firstScreen.scss";
import arrowRight from "../../../assets/icon/arrowRight.svg";
import { useSelector } from "react-redux";
import firstScreen from "../../../assets/img/firstScreen.png";
import firstSrceen1 from "../../../assets/img/firstSreen1.png";
import { useState } from "react";

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
const IMAGESFIRSTSCREEN = [firstScreen, firstSrceen1];
function FirstScreen() {
  const language = useSelector((state) => state.language);
  
  const [currentImage, setCurrentImage] = useState(0);
  function imageSlider() {
    setCurrentImage(currentImage === 1 ? 0 : 1);
  }

  return (
    <section className="first-screen">
      <div className="wrapper">
        <div className="first-screen__area">
          <h1>{FIRSTSCREEN[language].title}</h1>
          <p>{FIRSTSCREEN[language].subtitle}</p>
          <a href="#invest">
            <Button text={language === 0 ? "Подробнее" : "Learn more"} />
          </a>
        </div>
        <div className="slide-area">
          <div className="slide left" onClick={imageSlider}>
            <img src={arrowRight} alt="top to right" />
          </div>
          <div className="slide right" onClick={imageSlider}>
            <img src={arrowRight} alt="top to left" />
          </div>
        </div>
      </div>
      <img
        src={IMAGESFIRSTSCREEN[currentImage]}
        alt="building"
        className="first-screen__image"
      />
    </section>
  );
}

export default FirstScreen;
