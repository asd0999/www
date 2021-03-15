import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "./components/ThemeContext";
import { Switch, Route } from "react-router-dom";

import ThemeToggle from "./components/ThemeToggle";
import Intro from "./components/Intro";
import ProjectList from "./components/ProjectList";
import ProjectPage from "./components/ProjectPage";
import Header from "./components/Header";

const items = [
  "Project1",
  "Project2",
  "Project3",
  "Project4",
  "Project5",
  "Project6",
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
      <Header />
      {/* <ThemeToggle /> */}
      <Switch>
        <Route exact path="/">
          <Intro />
        </Route>
        <Route exact path="/projects">
          <ProjectList projectsJSON={projectsJSON} />
        </Route>
        <Route path="/projects/:projectname">
          <ProjectPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
