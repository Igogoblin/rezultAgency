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
// import searching from "../../assets/icon/ep_search.svg";
import close from "../../assets/icon/closet.svg";
// import SearchPopup from "../search/SearchPopup";

function Header() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);

  const [isVisible, setIsVisible] = useState(false);
  const [isArrowRotated, setIsArrowRotated] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isHeart, setIsHeart] = useState(false);
  const tooltipRef = useRef(null);

  const handleClickOutside = (event) => {
    if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
      setIsVisible(false);
      setIsArrowRotated(false);
    }
    if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
      setIsSearch(false);
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
  const handleSearch = () => {
    setIsSearch(!isSearch);
  };
  const closePopup = () => {
    setIsSearch(false);
  };

  return (
    <header>
      <div className="wrapper">
        <a href="/rezultAgency/">
          {" "}
          <img src={logo} alt="logo" />
        </a>
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
          <div className="top-controls__button" onClick={handleSearch}>
            <img src={search} alt="search" />
          </div>
          {isSearch && (
            <div
              className="search-container"
              ref={tooltipRef}
              onClick={closePopup}
            >
              <div
                className="search-popup__content"
                onClick={(e) => e.stopPropagation()}
              >
                <input
                  type="text"
                  placeholder={
                    language === 0 ? "Введите поисковый запрос..." : "Search..."
                  }
                  className="search-popup__input"
                >
                  {/* <img
                    src={searching}
                    alt="search"
                    className="search-popup__close"
                    onClick={closePopup}
                  /> */}
                </input>
              </div>
              <div className="search-popup__close" onClick={closePopup}>
                <img src={close} alt="cancel" onClick={closePopup} />
              </div>
            </div>
          )}
          <div
            className="top-controls__button"
            onClick={() => setIsHeart(!isHeart)}
            style={isHeart ? { background: "red" } : { background: "white" }}
          >
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
