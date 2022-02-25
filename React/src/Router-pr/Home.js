import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Start from "./Start";
import "./Router.scss";

export default function Home() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <NavLink to="about">About</NavLink>
          <NavLink className="la" to="contact">
            Contact
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
