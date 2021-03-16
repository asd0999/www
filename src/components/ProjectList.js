import React from "react";
import ProjectListItem from "./ProjectListItem";

function ProjectList(props) {
  return (
    <div className="project-container">
      <h1>Projects :</h1>
      {props.projects.map((project, index) => {
        return <ProjectListItem key={index} project={project} />;
      })}
    </div>
  );
}

export default ProjectList;
