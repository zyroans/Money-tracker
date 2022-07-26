import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import "../App.css";

function Login() {
  return (
    <div className="home-container">
      <h1>Login</h1>
      <form>
        <input type={"email"} placeholder={"Email"} />
        <input type={"password"} placeholder={"Password"} />
      </form>
      <Button text={"Login"} />
      <a href="google.com">Forgot Password?</a>
      <p>Don't have account yet?</p>
      <Link to={"sign-up"}>Sign Up</Link>
    </div>
  );
}

export default Login;
