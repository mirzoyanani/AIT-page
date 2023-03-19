import React, { useState, useContext } from "react";
import "./App.css";
import Header from "./Header";
import CentralPart from "./CentralPart";
import LanguageContext from "./languageContext";
import translations from "./library";
import CourseItem from "./Course";
import Branch from "./Branch";
function App() {
  const [pageLanguage, setPageLanguage] = useState("am");
  return (
    <div className="App">
      <LanguageContext.Provider value={{ pageLanguage, setPageLanguage }}>
        <Header />
        <CentralPart />
        <div className="CoursesPart">
          <p className="partName">{translations[pageLanguage].courses}</p>
          <div className="CourseItems">
            <CourseItem
              url="https://api.aitschool.am/web.png"
              name="Web Development"
              duration={6}
            />
            <CourseItem
              url="https://api.aitschool.am/ui-ux.png"
              name="UI/UX"
              duration={2}
            />
            <CourseItem
              url="https://api.aitschool.am/smm.png"
              name="SMM"
              duration={1.5}
            />
            <CourseItem
              url="https://api.aitschool.am/graphic-design.png"
              name="Graphic Design"
              duration={2}
            />
            <CourseItem
              url="https://api.aitschool.am/english.png"
              name="English"
              duration={2}
            />
          </div>
        </div>
        <div className=" BranchesPart CoursesPart">
          <p className="partName">{translations[pageLanguage].branches}</p>
          <div className=" BranchItems CourseItems">
            <Branch
              url="https://www.aitschool.am/images/office_ararat.jpg"
              countryName={translations[pageLanguage].branchNameArarat}
            />
            <Branch  url ='https://www.aitschool.am/images/office_yerevan.jpeg'countryName={translations[pageLanguage].branchNameErevan} />
          </div>
        </div>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
