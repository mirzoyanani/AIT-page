import React from 'react'
import './Recomendation.css'

const Recomendation = ({number,title,mainRecomendation}) => {
  return (
    <div className='recomendation'>
        <div className="title">{title}</div>
        <div className="mainRecomendation">{mainRecomendation}</div>
      </div>
  )
}

export default Recomendation