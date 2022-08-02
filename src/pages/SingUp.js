import React from "react";
import Button from "../components/Button";
import "../App.css";

function SingUp() {
  return (
    <div className="home-container">
      <div>
        <h1>Sign Up</h1>
      </div>
      <form className="forms-container">
        <input placeholder="Name" type={"text"} className="forms"></input>
        <input placeholder="Email" type={"email"} className="forms"></input>
        <input
          placeholder="Password"
          type={"password"}
          className="forms"
        ></input>
      </form>
      <div className="TC">
        <input type={"checkbox"}></input>
        <p>By signing up, you agree to the </p>
        <a href="https://www.google.com">Terms of Service and Privacy Policy</a>
      </div>
      <div className="btn-container">
        <Button text={"Sign Up"} />
        <p className="description-paragraph">Or with</p>
        <Button text={"Sign Up with Google"} />
      </div>
    </div>
  );
}

export default SingUp;
