import Button from "../button/Button";
import "./firstScreen.scss";
import arrowRight from "../../assets/icon/arrowRight.svg";
function FirstScreen() {
  return (
    <section className="first-screen">
      <div className="wrapper">
        <div className="first-screen__area">
          <h1>Найдите идеальное место для жизни</h1>
          <p>Откройте двери в новое будущее с нами</p>
          <Button text="Подробнее" />
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
