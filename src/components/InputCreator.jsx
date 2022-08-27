import React from "react";
import { useState, useRef, useEffect } from "react";

function InputCreator({ type, className, name, outsideRef }) {
  const [passwordIcon, setPasswordIcon] = useState("show");
  const [errorVisible, setErrorVisible] = useState(false);
  const passwordEye = useRef();
  const insideRef = useRef();
  const errorRef = useRef("");

  useEffect(() => {
    outsideRef.current.value = undefined;
    outsideRef.current.validate = validate;
    insideRef.current.error = " ";
  });

  function validate() {
    const inputType = insideRef.current.type;
    const inputValue = insideRef.current.value;

    let minLength = 0;

    /* const nameParameters = { length: 3, validated: true };
    const passwordParameters = { length: 8, validated: true };
    const emailParameters = {
      pattern: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
      validated: true,
    }; 
    `${inputType}`Parameters.validated*/
    if (inputType === "text") {
      minLength = 3;
    } else if (inputType === "password") {
      minLength = 8;
    } else if (inputType === "email") {
      minLength = 5;
    }
    if (inputValue.length >= minLength) {
      insideRef.current.className = "forms";
      setErrorVisible(false);
      return true;
    }

    insideRef.current.className = "forms error";
    errorRef.current.value = "Formato invalido";
    setErrorVisible(true);
    return false;
  }

  function togglePassword() {
    let currentType = insideRef.current.type;

    insideRef.current.type = currentType === "text" ? "password" : "text";
    setPasswordIcon(insideRef.current.type === "password" ? "show" : "hide");
  }

  return (
    <>
      <div>
        <div>
          <input
            ref={insideRef}
            type={type}
            className={className}
            placeholder={name}
            name={name}
            onChange={() =>
              (outsideRef.current.value = insideRef.current.value)
            }
          ></input>
          {type === "password" && (
            <i className="eye" ref={passwordEye} onClick={togglePassword}>
              <img alt="eye" src={`/assets/${passwordIcon}.png`}></img>
            </i>
          )}
        </div>
        <div className="error-container" ref={errorRef}>
          {errorVisible === true && (
            <p className="error-message">{errorRef.current.value}</p>
          )}
        </div>
      </div>
    </>
  );
}
InputCreator.defaultProps = {
  outsideRef: { current: {} },
};

export default InputCreator;
