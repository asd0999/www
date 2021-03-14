import React, { useEffect, useState } from "react";
import { ThemeContextConsumer } from "./components/ThemeContext";
import Intro from "./components/Intro";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <ThemeContextConsumer>
      {({ theme, toggleTheme }) => (
        <div className={`${theme}-theme container`}>
          <Intro />
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      )}
    </ThemeContextConsumer>
  );
}

export default App;
