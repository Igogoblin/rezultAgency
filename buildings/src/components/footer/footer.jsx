import { useSelector } from "react-redux";
import "./footer.scss";
import logo from "../../assets/icon/logo.svg";
import insta from "../../assets/icon/insta.svg";
import telegram from "../../assets/icon/telegram.svg";
import wats from "../../assets/icon/wats.svg";
import facebook from "../../assets/icon/facebook.svg";
import logo1 from "../../assets/icon/logo1.svg";

const FOOTER = [
  [
    ["Услуги", "Купить", "Арендовать", "Продать", "Оценить"],
    [
      "Недвижимость",
      "Квартиры",
      "Новостройки",
      "Дома и участки",
      "Коммерческая",
    ],
    ["Компания", "О нас", "Блог", "Контакты", "Связаться"],
    ["Другое", "Ипотечный калькулятор", "Инвестиции в недвижимость в Дубае"],
  ],
  [
    ["services", "buy", "rent", "sell", "estimate"],
    ["property", "apartments", "new", "houses", "commercial"],
    ["company", "about us", "blog", "contacts", "contact"],
    ["other", "mortgage calculator", "investments in dubai"],
  ],
];

function Footer() {
  const language = useSelector((state) => state.language);
  return (
    <footer>
      <div className="wrapper">
        <div className="footer__head">
          <img src={logo} alt="logo" />
          <div className="footer__social">
            <div>
              <img src={insta} alt="instagram" />
            </div>
            <div>
              <img src={telegram} alt="telegram" />
            </div>
            <div>
              <img src={wats} alt="watsapp" />
            </div>
            <div>
              <img src={facebook} alt="facebook" />
            </div>
          </div>
        </div>
        <div className="footer__body">
          <div className="footer__column footer-services">
            {FOOTER[language][0].map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </div>
          <div className="footer__column footer-property">
            {FOOTER[language][1].map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </div>

          <div className="footer__column footer-company">
            {FOOTER[language][2].map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </div>
          <div className="footer__column footer-other">
            {FOOTER[language][3].map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </div>
        </div>
        <div className="footer__footer">
          <p>© 2024. RMC. Все права защищены.</p>
          <img src={logo1} alt="logo company" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
