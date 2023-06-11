import React from 'react'
import { useNavigate } from 'react-router-dom';
function ClassItem({image, name, id}) {
  const navigate = useNavigate();
  return (
    <div className="classItem" onClick = {() =>{
       navigate("/CS-WVU-Course/" + id);
    }}>
       <div style={{backgroundImage: `url(${image})`}} className="bgImage"/>
       <h1>{name}</h1>
    </div>
  )
}

export default ClassItem