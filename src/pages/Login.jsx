import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import "../App.css";
import BackButton from "../components/BackButton";
import { useRef } from "react";
import InputCreator from "../components/InputCreator";

function Login() {
  const emailRef = useRef({});
  const passwordRef = useRef({});

  async function onSubmit() {
    const emailIsValid = emailRef.current.validate();
    const passwordIsValid = passwordRef.current.validate();
    if (emailIsValid && passwordIsValid) {
      const formDataValidated = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      const rawResponse = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataValidated),
      });
      const content = await rawResponse.json();
      console.log(content);
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
        <InputCreator
          name="Email"
          inputName="email"
          type={"email"}
          className="forms"
          outsideRef={emailRef}
        />
        <InputCreator
          inputName="password"
          name="Password"
          type={"password"}
          className="forms"
          outsideRef={passwordRef}
        />
      </form>
      <div className="login-btn-container">
        <Button text={"Login"} action={onSubmit} />
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
