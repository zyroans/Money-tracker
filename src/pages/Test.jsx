import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import "../App.css";
import BackButton from "../components/BackButton";
import { useRef } from "react";
import Empanada from "../components/Empanada";

function Test() {
  const nameRef = useRef({});
  const emailRef = useRef({});
  const passwordRef = useRef({});

  function submitLogin() {
    let nameIsValid = nameRef.current.validate();
    let emailIsValid = emailRef.current.validate();
    let passwordIsValid = passwordRef.current.validate();
    if (emailIsValid && passwordIsValid && nameIsValid) {
      console.log(nameRef);
      console.log("Form is valid");
    } else {
      console.log("form is invalid");
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
        <Empanada
          type={"text"}
          name={"Name"}
          className={"forms"}
          outsideRef={nameRef}
        />
        <Empanada
          type={"email"}
          name={"Email"}
          placeholder={"Email"}
          className="forms"
          outsideRef={emailRef}
        />
        <Empanada
          placeholder="Password"
          name="Password"
          type="password"
          className="forms"
          outsideRef={passwordRef}
        />
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

export default Test;
