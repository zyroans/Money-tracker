import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import "../App.css";
import BackButton from "../components/BackButton";
import { useRef, useState } from "react";

function Login() {
  const password = useRef();
  const passwordEye = useRef();
  const [type, setType] = useState("password");
  function togglePassword() {
    setType(type === "password" ? "text" : "password");
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
        <input type={"email"} placeholder={"Email"} className="forms" />
        <div>
          <input
            placeholder="Password"
            name="Password"
            type={type}
            className="forms"
            ref={password}
            required={true}
          ></input>
          <i className="eye" ref={passwordEye} onClick={togglePassword}>
            <img alt="eye" src="/assets/eye.svg"></img>
          </i>
        </div>
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
