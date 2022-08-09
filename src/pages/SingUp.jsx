import React from "react";
import Button from "../components/Button";
import "../App.css";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";

function SingUp() {
  return (
    <div className="home-container">
      <div className="page-navigation-container">
        <div>
          <BackButton />
        </div>
        <div className="page-title-container">
          <h1 className="page-title">Sign Up</h1>
        </div>
        <div className="page-title-fill"></div>
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
      <label className="TC">
        By signing up, you agree to the{" "}
        {
          <a href="https://www.google.com">
            Terms of Service and Privacy Policy
          </a>
        }
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
      <div className="btn-container">
        <Button text={"Sign Up"} />
        <p className="description-paragraph">Or with</p>
        <Button
          text={"Sign Up with Google"}
          google={true}
          image="/assets/flat-color-icons_google.svg"
        />
        <p className="description-paragraph">
          Already have an account? {<Link to={"/login"}>Login</Link>}
        </p>
      </div>
    </div>
  );
}

export default SingUp;
