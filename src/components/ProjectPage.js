import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";

import client from "../client";

function ProjectPage() {
  const context = useContext(ThemeContext);
  const [content, setContent] = useState([]);
  const { projectId } = useParams();

  useEffect(() => {
    console.log(projectId);

    client
      .getEntry(projectId)
      .then((response) => {
        console.log(response);
        setContent(response.fields);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="project-container">
      <div className="project-text-heading-container">
        <h1> {content.title} </h1>{" "}
        <div>
          {content.livesiteUrl && (
            <a href={content.livesiteUrl} target="_blank">
              <button className={`${context.theme}-theme-button link-button`}>
                <h2 className="project-link-external">Live Site</h2>
              </button>
            </a>
          )}
          <a href={content.githubUrl} target="_blank">
            <button className={`${context.theme}-theme-button link-button`}>
              <h2 className="project-link-external">GitHub</h2>
            </button>
          </a>
        </div>
      </div>
      <div className="projectpage-text-tech">{content.techStack}</div>
      <h4 className="projectpage-text-intro">{content.elevatorPitch}</h4>
      {/* <div className="project-img-feature"> */}
      {content.featureImage && (
        <img
          src={content.featureImage.fields.file.url}
          alt={content.title}
          className="project-img-feature"
        />
      )}{" "}
      {/* </div> */}
      <div
        className="projectpage-text-more"
        dangerouslySetInnerHTML={{ __html: content.description }}
      />
    </div>
  );
}

export default ProjectPage;
