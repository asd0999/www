import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "./components/ThemeContext";
import { Switch, Route } from "react-router-dom";

import client from "./client";
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
  const [projects, setProjects] = useState([]);
  const context = useContext(ThemeContext);

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        console.log(response.items);
        setProjects(response.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={`${context.theme}-theme container`}>
      <Header />
      <Switch>
        <Route exact path="/">
          <Intro />
        </Route>
        <Route exact path="/projects">
          <ProjectList projects={projects} />
        </Route>
        <Route path="/projects/:projectId">
          <ProjectPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
