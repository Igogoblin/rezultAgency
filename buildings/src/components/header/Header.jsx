import React from "react";
import logo from "../../assets/icon/logo.svg";
import search from "../../assets/icon/ep_search.svg";
import heart from "../../assets/icon/hearts.svg";
import call from "../../assets/icon/phoneWhite.svg";
import arrowDown from "../../assets/icon/arrowDown.svg";
import "./Header.scss";

function Header() {
  return (
    <header>
      <div className="wrapper">
        <img src={logo} alt="logo" />
        <nuv>
          <ul>
            <li>
              Услуги <img src={arrowDown} alt="on the pages" />
            </li>
            <li>О нас</li>
            <li>Блог</li>
            <li>Контакты</li>
          </ul>
        </nuv>
        <div className="top-controls">
          <div className="top-controsl__button">
            <img src={search} alt="search" />
          </div>
          <div className="top-controsl__button">
            <img src={heart} alt="heart" />
          </div>
          <div className="top-controsl__button callUs">
            <img src={call} alt="call" />
          </div>
          <div className="top-controsl__button language">
            Ru <img src={arrowDown} alt="language change" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
