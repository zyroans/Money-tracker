import React from "react";
import "../App.css";
import NavLinks from "../components/NavLinks";
import image from "../assets/money.png";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="description-container">
          <div className="description-image-container">
            <img src={image} alt="imagen" className="description-image" />
          </div>
          <h1 className="description-title">
            {"Gain total control of your money"}
          </h1>
          <p className="description-paragraph">
            {"Become your own money manager and make every cent count"}
          </p>
        </div>
        <div className="btn-container">
          <NavLinks URL={"sign-up"} text={"Sign Up"} />
          <NavLinks URL={"login"} text={"Login"} />
        </div>
      </div>
    </>
  );
}

export default Home;
