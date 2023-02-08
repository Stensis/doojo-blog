import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import BlogDetails from "./BlogDetails";
import Create from "./Create";
import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/create" element={<Create />} />
      </Routes>

      <Home />
    </div>
  );
}

export default App;
