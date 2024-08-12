import logo from "../../assets/icon/logo.svg";
import search from "../../assets/icon/ep_search.svg";
import heart from "../../assets/icon/hearts.svg";
import call from "../../assets/icon/phoneWhite.svg";
import arrowDown from "../../assets/icon/arrowDown.svg";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../store/language";

function Header() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);

  return (
    <header>
      <div className="wrapper">
        <img src={logo} alt="logo" />
        <nav>
          <ul>
            <li>
              {language === 0 ? "Услуги" : "Services"}{" "}
              <img src={arrowDown} alt="on the pages" />
            </li>
            <li>{language === 0 ? "О нас" : "About us"}</li>
            <li>{language === 0 ? "Блог" : "Blog"}</li>
            <li>{language === 0 ? "Контакты" : "Contacts"}</li>
          </ul>
        </nav>
        <div className="top-controls">
          <div className="top-controls__button">
            <img src={search} alt="search" />
          </div>
          <div className="top-controls__button">
            <img src={heart} alt="heart" />
          </div>
          <div className="top-controls__button callUs">
            <img src={call} alt="call" />
          </div>
          <div
            className="top-controls__button language"
            onClick={() => dispatch(setLanguage())}
          >
            {language === 0 ? "Ru" : "Eng"}{" "}
            <img src={arrowDown} alt="language change" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
