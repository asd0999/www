import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ThemeContext } from "./ThemeContext";

function ProjectListItem(props) {
  const context = useContext(ThemeContext);

  const { title, thumbnail, blurb, techStack } = props.project.fields;
  const projectId = props.project.sys.id;

  return (
    <Link to={`/projects/${projectId}`} className="link-underline">
      <div className={`${context.theme}-theme-project-card project-card`}>
        <div className="project-img-icon">
          <img src={thumbnail.fields.file.url} />
        </div>{" "}
        <div className="project-text-listitem">
          <div>
            <h2> {title} </h2>
            <div className="projectpage-text-tech">{techStack}</div>
          </div>
          <p className="project-text-blurb">{blurb}</p>{" "}
        </div>{" "}
      </div>
    </Link>
  );
}
export default ProjectListItem;
