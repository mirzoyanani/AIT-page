import React,{useContext} from "react";
import "./CentralPart.css";
import translations from "./library";
import LanguageContext from "./languageContext";


const CentralPart = () => {
    const {pageLanguage,setPageLanguage} = useContext(LanguageContext);
  
  return (
    <div className="main">
         <div className="InfoPart">
        <h1 className="companyName">Ararat</h1>
        <h3 className="schoolName">IT School</h3>
        <p className="schoolInfo">{translations[pageLanguage].schollInfo}</p>
        <button
        className='coursesbtn'
          tabIndex="0"
          type="button"
          data-v-f9e03932=""
        >
          <span className="q-focus-helper"></span>
          <span className="q-btn__content text-center col items-center q-anchor--skip justify-center row">
            <span className="block">{translations[pageLanguage].courses}</span>
          </span>
        </button>
      </div>
      <div className="imgPart">
        <img src="https://www.aitschool.am/images/main_image.png" />
      </div>
    </div>
  );
};

export default CentralPart;
