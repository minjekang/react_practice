import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/Search.js";
import Main from "./pages/Main.js";
import Header from "./components/Header.js";
import Headroom from "react-headroom";
const App = () => {
  return (
    <>
      <Headroom>
        <Header />
      </Headroom>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
