import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import "../App.css";
import BackButton from "../components/BackButton";

function Login() {
  return (
    <div className="home-container">
      <div className="page-navigation-container">
        <div>
          <BackButton />
        </div>
        <div className="page-title-container">
          <h1 className="page-title">Login</h1>
        </div>
        <div className="page-title-fill"></div>
      </div>
      <form className="forms-container">
        <input type={"email"} placeholder={"Email"} className="forms" />
        <input type={"password"} placeholder={"Password"} className="forms" />
      </form>
      <div className="login-btn-container">
        <Button text={"Login"} />
      </div>
      <div className="login-links-container">
        <a href="www.google.com" className="login-forgot-password">
          Forgot Password?
        </a>
        <p className="description-paragraph">
          Don't have account yet? {<Link to={"/sign-up"}>Sign Up</Link>}
        </p>
      </div>
    </div>
  );
}

export default Login;
