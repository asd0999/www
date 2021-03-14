import React, { Component, createContext } from "react";

const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    theme: "light",
  };

  toggleTheme = () => {
    this.setState((prevState) => {
      return {
        theme: prevState.theme === "light" ? "dark" : "light",
      };
    });
  };

  render() {
    const { theme } = this.state;
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme: this.toggleTheme }}>
        {" "}
        {this.props.children}{" "}
      </ThemeContext.Provider>
    );
  }
}

export { ThemeContextProvider, ThemeContext };
