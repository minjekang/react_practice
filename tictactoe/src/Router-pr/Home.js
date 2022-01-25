import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "router.scss";

export default function Home() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="about" element={<About />} />
          <Route path="contect" element={<Contect />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
