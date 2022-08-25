import React from "react";
import { useState, useRef } from "react";

function Empanada({ type, className, isRequired, name, outsideRef }) {
  const [passwordIcon, setPasswordIcon] = useState("show");
  const passwordEye = useRef();
  const insideRef = useRef();

  function validate() {
    console.log("se ejecuta validate");
    let inputType = insideRef.current.type;
    let inputValue = insideRef.current.value;
    let minLength = 0;

    /* const nameParameters = { length: 3, validated: true };
    const passwordParameters = { length: 8, validated: true };
    const emailParameters = {
      pattern: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
      validated: true,
    }; 
    `${inputType}`Parameters.validated*/
    if (inputType === "text") {
      console.log("entro por name");
      minLength = 3;
    } else if (inputType === "password") {
      console.log("entro por password");
      minLength = 8;
    } else if (inputType === "email") {
      minLength = 5;
      console.log("entro por email");
    }
    if (inputValue.length >= minLength) {
      insideRef.current.className = "forms";
      console.log("debe morir");
      return true;
    }
    console.log("esta pasando");
    insideRef.current.className = "forms error";
    return false;
  }

  function togglePassword() {
    let currentType = insideRef.current.type;
    console.log("current type", currentType);
    insideRef.current.type = currentType === "text" ? "password" : "text";
    setPasswordIcon(insideRef.current.type === "password" ? "show" : "hide");
  }
  outsideRef.current.validate = validate;

  return (
    <div>
      <input
        ref={insideRef}
        type={type}
        className={className}
        required={isRequired}
        placeholder={name}
        name={name}
      ></input>
      {type === "password" && (
        <i className="eye" ref={passwordEye} onClick={togglePassword}>
          <img alt="eye" src={`/assets/${passwordIcon}.png`}></img>
        </i>
      )}
    </div>
  );
}
Empanada.defaultProps = {
  outsideRef: { current: {} },
};

export default Empanada;
