import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "./components/ThemeContext";
import Intro from "./components/Intro";
import ProjectList from "./components/ProjectList";
import ThemeToggle from "./components/ThemeToggle";

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
      {/* <Intro /> */}
      <ProjectList projectsJSON={projectsJSON} />
      {/* <Project /> */}
    </div>
  );
}

export default App;
