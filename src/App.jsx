import React, { useState, useContext } from "react";
import "./App.css";
import Header from "./Header";

import Course from "./Course";
 export const LanguageContext = React.createContext();
function App(){
  const [pageLanguage, setPageLanguage] = useState("am");

  // function handleLanguageChange({pageLanguage,setPageLanguage}) {
  //   setPageLanguage(pageLanguage);
  // }
  return (
    <div className="App">
      <LanguageContext.Provider value={{pageLanguage,setPageLanguage}}>
        <Header />
         <Course/>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;

