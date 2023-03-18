
// App.js

import React, { useState, useContext } from "react";
import "./App.css";
import Header from "./Header";

// // Create a context for the current language
// const LanguageContext = React.createContext();

function App() {
  
  const [pageLanguage, setPageLanguage] = useState("am");
  function handleLanguageChange(pageLanguage){
    setPageLanguage(pageLanguage)
  }

 

  return (
    <div className="App">
      {/* <LanguageContext.Provider value={{ language, updateLanguage }}>
         <Header translations={translations} />
        <Main translations={translations} />
        <Footer translations={translations} /> 
      </LanguageContext.Provider> */}

      <Header onLanguageChange={ handleLanguageChange}/>
     
    </div>

  );
}

// function Header({ translations }) {
//   // Use the useContext hook to access the current language from the context
//   const { language } = useContext(LanguageContext);

//   return (
//     <header className="header">
//       <h1 className="header__title">
//         {translations[language].greeting}, {translations[language].name}!
//       </h1>
//       <nav className="header__nav">
//         <ul className="header__list">
//           <li className="header__item"><a href="#">{translations[language].home}</a></li>
//           <li className="header__item"><a href="#">{translations[language].about}</a></li>
//           <li className="header__item"><a href="#">{translations[language].contact}</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// function Main({ translations }) {
//   // Use the useContext hook to access the current language and updateLanguage function from the context
//   const { language, updateLanguage } = useContext(LanguageContext);

//   // Define state for the input field
//   const [inputValue, setInputValue] = useState("");

//   // Define a function to handle the input field change event
//   function handleInputChange(event) {
//     setInputValue(event.target.value);
//   }

//   // Define a function to handle the form submission event
//   function handleSubmit(event) {
//     event.preventDefault();
//     translations[language].name = inputValue;
//     setInputValue("");
//   }

//   return (
//     <main className="main">
//       <form onSubmit={handleSubmit}>
//         <label className="main__label">
//           {translations[language].inputPlaceholder}:
//           <input type="text" value={inputValue} onChange={handleInputChange} className="main__input" />
//         </label>
//         <button type="submit" className="main__button">{translations[language].buttonLabel}</button>
//       </form>
//     </main>
//   );
// }

// function Footer({ translations }) {
//   // Use the useContext hook to access the current language from the context
//   const { language } = useContext(LanguageContext);

//   return (
//     <footer className="footer">
//       <p className="footer__text">&copy; 2023 My App.
// </p>
//   <p className="footer__text">{translations[language].rights}</p>
// </footer>
//   )}

export default App;
