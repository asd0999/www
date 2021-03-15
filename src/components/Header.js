import React, { useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import ThemeToggle from "./ThemeToggle";

function Header() {
  const history = useHistory();
  const { pathname } = useLocation();

  const goBack = () => {
    history.goBack();
  };

  const showLocay = () => {
    console.log(pathname);
  };

  return (
    <div className="header">
      {pathname === "/" ? (
        <h2>Hello!</h2>
      ) : (
        <h2 className="breadcrumb-links">
          / <Link to="/">home</Link> /{" "}
          <a style={{ textDecoration: "underline" }} onClick={goBack}>
            back
          </a>
        </h2>
      )}
      <ThemeToggle />
    </div>
  );
}

export default Header;
