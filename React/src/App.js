import "./App.css";
import MyComponent from "./MyComponent";
import Home from "./Router-pr/Home";
import TicTactoe from "./TicTacToe/TicTacToe";
function App() {
  return (
    <div className="App">
      <MyComponent name="React" favoriteNumber={7}>
        리액트
      </MyComponent>
    </div>
  );
}

export default App;
