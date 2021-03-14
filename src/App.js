import React, { useContext } from "react";
import { ThemeContext } from "./components/ThemeContext";
import Intro from "./components/Intro";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const context = useContext(ThemeContext);
  return (
    <div className={`${context.theme}-theme container`}>
      <ThemeToggle />
      <Intro />
    </div>
  );
}

export default App;
