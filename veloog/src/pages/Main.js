import React from "react";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div>
      <Link to="/">main</Link>
      <br />
      <Link to="/search">search</Link>
    </div>
  );
};

export default Main;
