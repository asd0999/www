import React, { useState } from "react";
import PropTypes from "prop-types";

function ThemeToggle(props) {
  const [position, setPosition] = useState(0);
  function changePosition() {
    setPosition((prevPosition) => (prevPosition === 0 ? 22 : 0));
  }
  return (
    <div className={`${props.theme}-theme-toggle-body toggle-body`}>
      <div
        className={`${props.theme}-theme-toggle-switch toggle-switch`}
        onClick={() => {
          props.toggleTheme();
          changePosition();
        }}
        style={{ left: position }}
      ></div>
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
