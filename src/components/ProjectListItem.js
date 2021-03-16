import React from "react";
import { Link } from "react-router-dom";

function ProjectListItem(props) {
  const { title, thumbnail, blurb, techStack } = props.project.fields;
  const projectId = props.project.sys.id;

  return (
    <Link to={`/projects/${projectId}`} className="link-underline">
      <div className="project-card">
        <div className="project-img-icon">
          <img src={thumbnail.fields.file.url} />
        </div>{" "}
        <div className="project-text-listitem">
          <h2> {title} </h2>
          <div className="projectpage-text-tech">{techStack}</div>
          <p>{blurb}</p>{" "}
        </div>{" "}
      </div>
    </Link>
  );
}
export default ProjectListItem;
