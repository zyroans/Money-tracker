import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { useState } from "react";
import SingUp from "./pages/SingUp";

function App() {
  const [nav, setNav] = useState("hme");

  return <>{nav === "home" ? <Home /> : <SingUp />}</>;
}

export default App;
