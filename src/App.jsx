import React, { useState, useContext } from "react";
import "./App.css";
import Header from "./Header";
import CentralPart from "./CentralPart";
import Course from "./Course";
//  export const LanguageContext = React.createContext();
import LanguageContext from "./languageContext";
function App(){
  const [pageLanguage, setPageLanguage] = useState("am");

  return (
    <div className="App">
      <LanguageContext.Provider value={{pageLanguage,setPageLanguage}}>
        <Header />
        < CentralPart/>
         <Course/>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;

