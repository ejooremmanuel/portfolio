import React, { useContext } from "react";
import "semantic-ui-css/semantic.min.css";
import Intro from "./components/intro/Intro";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./Context";
function App() {
  const theme = useContext(ThemeContext);
  const { darkMode } = theme.state;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#000" : "#fff",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
    </div>
  );
}

export default App;
