import React from "react";
import "../App.css";
import NavLinks from "../components/NavLinks";
import Slider from "../components/Slider";

function Home() {
  return (
    <>
      <div className="home-container">
        <Slider />
        <div className="btn-container">
          <NavLinks URL={"sign-up"} text={"Sign Up"} />
          <NavLinks URL={"login"} text={"Login"} accent={true} />
        </div>
      </div>
    </>
  );
}

export default Home;
