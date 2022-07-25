import React from "react";
import Button from "../components/Button";
import "../App.css";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="description-container">
          <div className="description-image-container">
            <img src="" alt="imagen" className="description-image" />
          </div>
          <h1 className="description-title">
            {"Gain total control of your money"}
          </h1>
          <p className="description-paragraph">
            {"Become your own money manager and make every cent count"}
          </p>
        </div>
        <Button text={"Sign Up"} />
        <Button text={"Login"} />
      </div>
    </>
  );
}

export default Home;
