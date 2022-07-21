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
import Average from "./Average";
import RefSample from "./RefSample";
import SassComponent from "./SassComponent";
import CSSModule from "./CSSModule";

const App = () => {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To dos {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do"
        />
        <button>Add to do</button>
      </form>
    </div>
  );
};
export default App;
