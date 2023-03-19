import React from 'react'
import { useContext } from 'react';
import LanguageContext from './languageContext';

import './Course.css'
import translations from './library';
const CourseItem = ({url,name,duration}) => {
    const {pageLanguage,setPageLanguage} = useContext(LanguageContext);
  return (
    <div className='CourseItem'>
       <img  className= 'CourseItemImg'src={url} alt="" />
        <h2 className='courseName'>{name}</h2>
        <p className='courseName'>{duration + '  '+ translations[pageLanguage].month}</p>
    </div>
  )
}

export default CourseItem