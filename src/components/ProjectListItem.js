import React from "react";

function ProjectListItem(props) {
  return (
    <div className="project-card">
      <div className="project-img-icon">
        <img src="#" />
      </div>{" "}
      <div className="project-text">
        <h2> {props.content} </h2>{" "}
        <p>
          some text about the project, what it is and what it does etc.take from
          resume or from the older content. just trying to test with this dummy
          text
        </p>{" "}
      </div>{" "}
    </div>
  );
}
export default ProjectListItem;
