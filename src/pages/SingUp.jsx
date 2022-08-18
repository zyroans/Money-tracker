import React from "react";
import Button from "../components/Button";
import "../App.css";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import { useRef, useState } from "react";

function SingUp() {
  const name = useRef("");
  const email = useRef("");
  const password = useRef("");
  const TC = useRef("");
  const passwordEye = useRef();
  const [type, setType] = useState("password");

  function togglePassword() {
    setType(type === "password" ? "text" : "password");
    console.log(password.current);
    console.log(type, " === ", password.current.type);
    console.log(password.current.type);
    console.log(type);
  }

  function onSubmit() {
    if (TC.current.checked === true) {
      console.log("Validation has been sent with the following data");
      console.log(`${name.current.name}: ${name.current.value}`);
      console.log(`${email.current.name}: ${email.current.value}`);
      console.log(`${password.current.name}: ${password.current.value}`);
    } else alert("You need to agree Terms of Service and Privacy Policy");
  }
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
        <input
          placeholder="Name"
          name="Name"
          type={"text"}
          className="forms"
          ref={name}
        ></input>
        <input
          placeholder="Email"
          name="Email"
          type={"email"}
          className="forms"
          ref={email}
        ></input>
        <div>
          <input
            placeholder="Password"
            name="Password"
            type={type}
            className="forms"
            minLength={8}
            ref={password}
            required={true}
          ></input>
          <i className="eye" ref={passwordEye} onClick={() => togglePassword()}>
            <img alt="eye" src="/assets/eye.svg"></img>
          </i>
        </div>
      </form>
      <label className="TC">
        By signing up, you agree to the{" "}
        {
          <a href="https://www.google.com">
            Terms of Service and Privacy Policy
          </a>
        }
        <input type="checkbox" ref={TC} />
        <span className="checkmark"></span>
      </label>
      <div className="btn-container">
        <Button text={"Sign Up"} action={onSubmit} />
        <p className="paragraph-between-btns">Or with</p>
        <Button
          text={"Sign Up with Google"}
          google={true}
          image="/assets/flat-color-icons_google.svg"
        />
        <p className="paragraph-below-btns">
          Already have an account? {<Link to={"/login"}>Login</Link>}
        </p>
      </div>
    </div>
  );
}

export default SingUp;
