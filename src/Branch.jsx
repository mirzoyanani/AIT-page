import React,{useContext} from 'react'
import './Branch.css'

const Branch = ({url,countryName}) => {
  return (
    <div className="CourseItem">
    <img className="BranchImg" src={url} />
    <p className="courseName">
      {countryName}
    </p>
  </div>
  )
}

export default Branch