import imageError from "../assets/img/pexelsTechnobulka.png";
import "../App.css";
import logo from "../assets/icon/logoEr.svg";
import Button from "../components/button/Button";
function Er() {
  return (
    <section className="error-page">
      <div className="wrapper">
        <a href="/rezultAgency/">
          <img src={logo} className="logo" alt="logo" />
        </a>
        <div className="er-area">
          <h1>Упс...</h1>
          <p>Страницы не найдено</p>
          <Button text="На главную" link="/rezultAgency/" />
        </div>
      </div>
      <img src={imageError} alt="building" className="error-image" />
    </section>
  );
}

export default Er;
