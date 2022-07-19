import React from "react";
import Button from "../components/Button";

function Home() {
  return (
    <>
      <div>
        <div>
          <div>
            <img src="" alt="imagen" />
          </div>
          <h1>{"Gain total control of your money"}</h1>
          <p>{"Become your own money manager and make every cent count"}</p>
        </div>
        <Button text={"Sign Up"} />
        <Button text={"Login"} />
      </div>
    </>
  );
}

export default Home;
