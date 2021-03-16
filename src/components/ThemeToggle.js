import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "./ThemeContext";

function ThemeToggle() {
  const [position, setPosition] = useState(1);

  function changePosition() {
    setPosition((prevPosition) => (prevPosition === 1 ? 23 : 1));
  }

  const context = useContext(ThemeContext);

  return (
    <div className={`${context.theme}-theme-toggle-body toggle-body`}>
      <div
        className={`${context.theme}-theme-toggle-switch toggle-switch`}
        onClick={() => {
          context.toggleTheme();
          changePosition();
        }}
        style={{ left: position }}
      ></div>{" "}
    </div>
  );
}

ThemeToggle.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]),
};

ThemeToggle.defaultProps = {
  theme: "light",
};

export default ThemeToggle;
