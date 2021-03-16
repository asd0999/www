import React, { useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import ThemeToggle from "./ThemeToggle";

function Header() {
  const history = useHistory();
  const { pathname } = useLocation();

  const goBack = () => {
    history.goBack();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="header">
      <h2 className="breadcrumb-links">
        {pathname === "/" ? (
          <Link to="/projects">projects</Link>
        ) : (
          <>
            / <Link to="/">home</Link> /{" "}
            <a style={{ textDecoration: "underline" }} onClick={goBack}>
              back
            </a>
          </>
        )}
      </h2>
      <ThemeToggle />
    </div>
  );
}

export default Header;
