import React from "react";
import Button from "../components/Button";
import "../App.css";

function SingUp() {
  return (
    <div className="home-container">
      <div className="page-title-container">
        <h1 className="page-title">Sign Up</h1>
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
        <input type={"checkbox"} className="TC-checkbox"></input>
        <div className="TC-text">
          <p>
            By signing up, you agree to the{" "}
            {
              <a href="https://www.google.com">
                Terms of Service and Privacy Policy
              </a>
            }
          </p>
        </div>
      </div>
      <div className="btn-container">
        <Button text={"Sign Up"} />
        <p className="description-paragraph">Or with</p>
        <Button
          text={"Sign Up with Google"}
          google={true}
          image="/assets/flat-color-icons_google.svg"
        />
      </div>
    </div>
  );
}

export default SingUp;
