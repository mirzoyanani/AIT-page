import React, { useState, useContext } from "react";
import "./Header.css";
import translations from "./library.js";
import LanguageContext from "./languageContext";
const Header = () => {
  const { pageLanguage, setPageLanguage } = useContext(LanguageContext);

  return (
    <div className="header">
      <div className="headerItems">
        <img
          src="https://www.aitschool.am/images/Ait-Logo.svg"
          className="logo"
        />
        <nav>
          <ul>
            <li className="li ">{translations[pageLanguage].home}</li>
            <li className="li ">{translations[pageLanguage].courses}</li>
            <li className=" li">{translations[pageLanguage].registration}</li>
            <li className="li">{translations[pageLanguage].aboutUs}</li>
            <li className="li">{translations[pageLanguage].blog}</li>
            <li className="li">{translations[pageLanguage].contact}</li>
          </ul>
        </nav>

        <img
          onClick={() => {
            setPageLanguage("en");
          }}
          className="languageLogo"
          src="https://bellart.am/images/english.svg"
        />
        <img
          onClick={() => {
            setPageLanguage("ru");
          }}
          className="languageLogo"
          src="https://bellart.am/images/russian.svg"
        />
        <img
          onClick={() => {
            setPageLanguage("am");
          }}
          className="languageLogo"
          src="https://bellart.am/images/armenian.svg"
        />
      </div>
    </div>
  );
};

export default Header;
