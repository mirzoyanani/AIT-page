import React from 'react'
import { useContext } from 'react';
import LanguageContext from './languageContext';
const Course = () => {
    const {pageLanguage,setPageLanguage} = useContext(LanguageContext);
  return (
    <div>Course
        <p>language is:{pageLanguage}</p>
        
    </div>
  )
}

export default Course