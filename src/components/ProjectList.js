import React from "react";
import ProjectListItem from "./ProjectListItem";

function ProjectList(props) {
  return (
    <div className="project-container">
      <h1>Projects :</h1>
      {/* <ul> */}
      {props.projectsJSON.map((item, index) => {
        return <ProjectListItem key={index} content={item} />;
      })}
      {/* </ul> */}
    </div>
  );
}

export default ProjectList;
