import React, { Component, createContext } from "react";

const { Provider, Consumer } = createContext();

class ThemeContextProvider extends Component {
  state = {
    theme: "light",
  };

  toggleTheme = () => {
    console.log("toggle!");
    this.setState((prevState) => {
      return {
        theme: prevState.theme === "light" ? "dark" : "light",
      };
    });
  };

  render() {
    const { theme } = this.state;
    return (
      <Provider value={{ theme, toggleTheme: this.toggleTheme }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
