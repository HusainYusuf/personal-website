import React from 'react'
import ClassItem from "../components/ClassItem"
import "../Styles/Class.css"
import cs110 from "../assets/cs110.png"
import cs111 from "../assets/cs111.png"
import classIcon from "@material-ui/icons/Class"
import {ClassList} from "../helper/Classlist"

function CSWVU() {
  return (
    <div className="classes">
      <h1>Computer Science Courses</h1>
      <div className="classList">
        {ClassList.map((aClass, index) => {
          return <ClassItem id = {index} name ={aClass.name} image = {aClass.image}/>
        })}
      </div>
    </div>
  )
}

export default CSWVU