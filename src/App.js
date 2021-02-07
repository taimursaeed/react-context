import "./styles.css";
import Nav from "./nav";
import Body from "./body";
import React from "react";
import { ThemeContext, ThemeContextUpdate } from "./ThemeContext";

export default function App() {
  const [theme, setTheme] = React.useState("light");
  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };
  return (
    <div className="App">
      <button onClick={toggleTheme}>Toggle Theme [App level]</button>

      <ThemeContext.Provider value={theme}>
        <ThemeContextUpdate.Provider value={toggleTheme}>
          <Nav></Nav>
          <Body></Body>
        </ThemeContextUpdate.Provider>
      </ThemeContext.Provider>
    </div>
  );
}
