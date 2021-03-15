import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "./components/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import Intro from "./components/Intro";
import ProjectList from "./components/ProjectList";
import ProjectPage from "./components/ProjectPage";

const items = [
  "Project 1",
  "Project 2",
  "Project 3",
  "Project 4",
  "Project 5",
  "Project 6",
];

function App() {
  const [projectsJSON, setProjectsJSON] = useState([]);
  const context = useContext(ThemeContext);

  useEffect(() => {
    // fetch("url")
    //   .then((data) => data.json())
    //   .then((json) => setProjects(json));
    setProjectsJSON(items);
  }, []);

  return (
    <div className={`${context.theme}-theme container`}>
      <ThemeToggle />
      <Intro />
      {/* <ProjectList projectsJSON={projectsJSON} /> */}
      {/* <ProjectPage /> */}
    </div>
  );
}

export default App;
