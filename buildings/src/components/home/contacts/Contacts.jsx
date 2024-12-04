import "./contacts.scss";
import contactSection from "../../../assets/img/contactSection.png";
import { useSelector } from "react-redux";
import Button from "../../button/Button";

function Contacts() {
  const language = useSelector((state) => state.language);
  return (
    <section id="contacts">
      <div className="wrapper">
        <div className="contacts__area">
          <div className="contacts__text">
            <h2>
              {language === 0
                ? "Остались вопросы? Свяжитесь с нами"
                : "Have questions? Contact us"}
            </h2>
            <form action="#">
              <input
                type="text"
                placeholder={language === 0 ? "ФИО *" : "Full name *"}
              />
              <input
                type="number"
                placeholder={
                  language === 0 ? "Номер телефона *" : "Phone number *"
                }
              />
              <input type="email" placeholder="E-mail" />
              <textarea
                placeholder={language === 0 ? "Ваш вопрос" : "Your question"}
              ></textarea>
              <Button text={language === 0 ? "Отправить" : "Send"} />
            </form>
          </div>
          <img
            src={contactSection}
            className="contacts__image"
            alt="building"
          />
        </div>
      </div>
    </section>
  );
}

export default Contacts;
