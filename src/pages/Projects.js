import React from 'react'
import "../Styles/Projects.css"
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from '../helper/ProjectList';

function Projects() {
  return (
    <div className="projects">
     <h1>Personal Projects</h1>
     <div className="projectList">
      {ProjectList.map((project, index) => {
        return <ProjectItem id = {index} name ={project.name} image = {project.image}/>
      })}
     </div>
    </div>
  )
}

export default Projects