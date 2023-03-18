import React, { useState, useContext } from "react";
import "./Header.css";
import translations from './library.js';


const Header = (props) => {
  const [language, setLanguage] = useState("am" );
  return (
    <div className="header">
      <div className="headerItems">
        <img
          src="https://www.aitschool.am/images/Ait-Logo.svg"
          className="logo"
        />
        <nav>
          <ul>
            <li className="li ">{translations[language].home}</li>
            <li className="li ">{translations[language].courses}</li>
            <li className=" li">{translations[language].registration}</li>
            <li className="li">{translations[language].aboutUs}</li>
            <li className="li">{translations[language].blog}</li>
            <li className="li">{translations[language].contact}</li>
          </ul>
        </nav>

        <img
          onClick={() => {
            setLanguage("en");
            props.onLanguageChange(language);
          }}
          className="languageLogo"
          src="https://bellart.am/images/english.svg"
        />
        <img
          onClick={() => {
            setLanguage("ru");
            props.onLanguageChange(language);
          }}
          className="languageLogo"
          src="https://bellart.am/images/russian.svg"
        />
        <img
          onClick={() => {
            setLanguage("am");
            props.onLanguageChange(language);
          }}
          className="languageLogo"
          src="https://bellart.am/images/armenian.svg"
        />
      </div>
    </div>
  );
};

export default Header;

// import React, { useState, useContext } from 'react';

// const ThemeContext = React.createContext();

// function ThemeProvider(props) {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   const value = {
//     isDarkMode,
//     toggleMode,
//   };

//   return (
//     <ThemeContext.Provider value={value}>
//       {props.children}
//     </ThemeContext.Provider>
//   );
// }
