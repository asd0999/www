import React from "react";
import Project from "./Project";

function ProjectList() {
  const items = ["Project 1", "Project 2", "Project 3"];

  return (
    <div className="project-container">
      <h1>Projects :</h1>
      {/* <ul> */}
      {items.map((item, index) => {
        return <Project key={index} item={item} />;
      })}
      {/* </ul> */}
    </div>
  );
}

export default ProjectList;
