import React from "react";
import "./App.css";
import Home from "./pages/Home";
import SingUp from "./pages/SingUp";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="sign-up" element={<SingUp />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
