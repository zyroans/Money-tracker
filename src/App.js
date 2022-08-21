import React from "react";
import "./App.css";
import Home from "./pages/Home";
import SingUp from "./pages/SingUp";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Resume from "./pages/Resume";
import Test from "./pages/Test";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="sign-up" element={<SingUp />} />
      <Route path="login" element={<Login />} />
      <Route path="resume" element={<Resume />} />
      <Route path="testing" element={<Test />} />
    </Routes>
  );
}

export default App;
