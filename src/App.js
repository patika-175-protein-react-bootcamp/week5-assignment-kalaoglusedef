import logo from "./logo.svg";
import RightSide from "./components/rightSide";
import LeftSide from "./components/leftSide";
import "./App.scss";
import DarkModeSelection from "./components/DarkmodeSelection";
import { useState } from "react";

function App() {
  const [isDarkMode, setDarkMode] = useState("light");

  return (
    <div className="App">
      <LeftSide isDarkMode={isDarkMode === "dark"}></LeftSide>
      <RightSide isDarkMode={isDarkMode === "dark"}></RightSide>
      <DarkModeSelection
        value={isDarkMode}
        onChange={(mode) => {
          setDarkMode(mode);
        }}
      ></DarkModeSelection>
    </div>
  );
}

export default App;
