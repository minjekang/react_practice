import create from "zustand";

const useStore = create((set) => ({
  count: 0,
  count2: 0,
  up() {
    set((state) => ({ count: state.count + 1 }));
  },
  down() {
    set((state) => ({ count2: state.count2 - 1 }));
  },
}));
function App() {
  //useStore();
  const { count, up } = useStore();
  return (
    <div classname="App">
      <p>구독자 {count}</p>
      <button
        onClick={() => {
          up();
        }}
      >
        +1
      </button>
      <Card />
    </div>
  );
}

function Card() {
  const { count2, down } = useStore();
  return (
    <div classname="App">
      <p>구독자 {count2}</p>
      <button
        onClick={() => {
          down();
        }}
      >
        -1
      </button>
    </div>
  );
}

export default App;
