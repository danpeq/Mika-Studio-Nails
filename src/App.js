import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Servicios from "./routes/Servicios";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
