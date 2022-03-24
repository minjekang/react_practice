import React, { useState } from "react";
import "./App.css";
import Say from "./Say";
import Counter from "./Counter";
import MyComponent from "./MyComponent";
import Home from "./Router-pr/Home";
import TicTactoe from "./TicTacToe/TicTacToe";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import IterationSample from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";
import Info from "./Info";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
}
export default App;
