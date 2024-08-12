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
              Услуги <img src={arrowDown} alt="on the pages" />
            </li>
            <li>О нас</li>
            <li>Блог</li>
            <li>Контакты</li>
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
