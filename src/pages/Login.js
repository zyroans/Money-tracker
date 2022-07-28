import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import "../App.css";

function Login() {
  return (
    <div className="home-container">
      <h1>Login</h1>
      <form className="forms-container">
        <input type={"email"} placeholder={"Email"} className="forms" />
        <input type={"password"} placeholder={"Password"} className="forms" />
      </form>
      <Button text={"Login"} />
      <a href="www.google.com">Forgot Password?</a>
      <p className="description-paragraph">Don't have account yet?</p>
      <Link to={"/sign-up"}>Sign Up</Link>
    </div>
  );
}

export default Login;
