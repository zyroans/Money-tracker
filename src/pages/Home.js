import React from "react";
import Button from "../components/Button";

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
        <Button className="button" text={"Sign Up"} />
        <Button className="button" text={"Login"} />
      </div>
    </>
  );
}

export default Home;
