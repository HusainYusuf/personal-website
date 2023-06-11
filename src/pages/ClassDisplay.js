import React from 'react'
import { useParams } from 'react-router-dom'
import { ClassList } from '../helper/Classlist';
import "../Styles/ClassDisplay.css";

function ClassDisplay() {
 const {id} = useParams();
 const aClass = ClassList[id];

  return (
       <div className="class">
       <h1> {aClass.name}</h1>
       <img src = {aClass.image} />
       </div>  
);
}

export default ClassDisplay