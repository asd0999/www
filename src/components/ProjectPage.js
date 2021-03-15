import React from "react";
import { useParams } from "react-router-dom";

function ProjectPage(props) {
  const { projectname } = useParams();

  return (
    <div className="project-container">
      <div className="project-text-heading-container">
        <h1> Title - {projectname} </h1>{" "}
        <h2 className="project-link-external">
          <a href="#" target="_blank">
            Livesite
          </a>{" "}
          |{" "}
          <a href="#" target="_blank">
            GitHub
          </a>
        </h2>
      </div>
      <div className="projectpage-text-tech">
        HTML | CSS | JavaScript | React Router | React Spring | Node | Express |
        WebSocket | WebRTC | Heroku
      </div>
      <h4 className="projectpage-text-intro">
        Swish is a peer-to-peer application that can be used to transfer files
        and URLs between devices
      </h4>
      <div className="project-img-feature">
        <img src="#" alt="feature-photo" />{" "}
      </div>
      <div className="projectpage-text-more">
        I own two laptops (Mac and Linux), a phone (Android) and an iPad. Since
        all the devices run different Operating Systems there isn't a seamless
        solution to share files or URLs across my devices other than using a
        cloud service like google drive or dropbox. Although cloud solutions are
        helpful for larger more organized transfer of files, its not ideal for
        sharing an image quickly from my iPad to my laptop or a PDF from my
        laptop to my phone so I can read it on the go. For such situations I
        would usually end up emailing these things to myself but that's a
        cumbersome process too - login, attach file, login again on the other
        device, download file. It gets ridiculous when all I want to do is share
        a URL, emailing is such overkill.
      </div>
    </div>
  );
}

export default ProjectPage;
