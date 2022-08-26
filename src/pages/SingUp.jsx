import React from "react";
import Button from "../components/Button";
import "../App.css";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import { useRef } from "react";
import InputCreator from "../components/InputCreator";

function SingUp() {
  const nameRef = useRef({});
  const emailRef = useRef({});
  const passwordRef = useRef({});
  const TC = useRef("");

  function onSubmit() {
    // if ||
    // sacar la referencia del input vacio
    // se cambiaria la clase por emptyImput
    if (TC.current.checked === true) {
      const nameIsValid = nameRef.current.validate();
      const emailIsValid = emailRef.current.validate();
      const passwordIsValid = passwordRef.current.validate();
      if (emailIsValid && passwordIsValid && nameIsValid) {
        console.log(nameRef);
        console.log(emailRef);
        console.log(passwordRef);
        console.log("Form is valid");
      } else {
        console.log("form is invalid");
      }
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
        <InputCreator
          name="Name"
          type={"text"}
          className="forms"
          outsideRef={nameRef}
        />
        <InputCreator
          name="Email"
          type={"email"}
          className="forms"
          outsideRef={emailRef}
        />
        <InputCreator
          name="Password"
          type={"password"}
          className="forms"
          outsideRef={passwordRef}
        />
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
