import logo from "../../assets/icon/logo.svg";
import search from "../../assets/icon/ep_search.svg";
import heart from "../../assets/icon/hearts.svg";
import call from "../../assets/icon/phoneWhite.svg";
import arrowDown from "../../assets/icon/arrowDown.svg";
import burger from "../../assets/icon/BurgerCall.svg";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../store/language";
import { useEffect, useRef, useState } from "react";

function Header() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);

  const [isVisible, setIsVisible] = useState(false);
  const [isArrowRotated, setIsArrowRotated] = useState(false);
  const tooltipRef = useRef(null);

  const handleClickOutside = (event) => {
    if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
      setIsVisible(false);
      setIsArrowRotated(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleButtonClick = () => {
    setIsVisible(!isVisible);
    setIsArrowRotated(!isArrowRotated);
  };

  return (
    <header>
      <div className="wrapper">
        <img src={logo} alt="logo" />
        <nav>
          <ul>
            <li className="tooltip-container" onClick={handleButtonClick}>
              {language === 0 ? "Услуги" : "Services"}{" "}
              <img
                src={arrowDown}
                alt="on the pages"
                className={`tooltip__arrow ${isArrowRotated ? "rotated" : ""}`}
              />
              {isVisible && (
                <div className="tooltip-box" ref={tooltipRef}>
                  <a href="#mortgage" onClick={() => setIsVisible(false)}>
                    {" "}
                    {language === 0 ? "Купить" : "Buy"}
                  </a>

                  <a href="#invest" onClick={() => setIsVisible(false)}>
                    {language === 0 ? "Арендовать" : "Rent"}
                  </a>
                  <a href="#invest" onClick={() => setIsVisible(false)}>
                    {language === 0 ? "Продать" : "Sell"}
                  </a>
                  <a href="#mortgage" onClick={() => setIsVisible(false)}>
                    {language === 0
                      ? "Оценка недвижимости"
                      : "Property assessment"}
                  </a>
                </div>
              )}
            </li>

            <li>
              <a href="#aboutCompany">
                {language === 0 ? "О нас" : "About us"}
              </a>
            </li>

            <li>
              <a href="#blog">{language === 0 ? "Блог" : "Blog"}</a>
            </li>
            <li>
              <a href="#contacts">{language === 0 ? "Контакты" : "Contacts"}</a>
            </li>
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
          <div className="top-controls__button burger">
            <img src={burger} alt="burger" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
