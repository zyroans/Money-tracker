import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import "../App.css";
import BackButton from "../components/BackButton";
import { useRef, useState } from "react";
import ValidatableInput from "../components/ValidatableInput";

function Login() {
  var emailRef = useRef({});
  var passwordRef = useRef({});

  function submitLogin() {
    let emailIsValid = emailRef.current.validate()
    let passwordIsValid = passwordRef.current.validate()
    if (emailIsValid && passwordIsValid) {
      console.log("Form is valid")
    } else {
      console.log("form is invalid")
    }
  }

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
        <ValidatableInput type={"email"} placeholder={"Email"} className="forms" outsideRef={emailRef} />
        <ValidatableInput
          placeholder="Password"
          name="Password"
          type="password"
          className="forms"
          outsideRef={passwordRef} />
      </form>
      <div className="login-btn-container">
        <Button text={"Login"} action={submitLogin} />
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
