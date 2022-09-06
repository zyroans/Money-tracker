import React from "react";
import { useState, useRef, useEffect } from "react";
import validationRules from "../utils/RegEx";

function InputCreator({ type, className, name, outsideRef }) {
  const [passwordIcon, setPasswordIcon] = useState("show");
  const [showImputError, setShowImputError] = useState(false);
  const passwordEye = useRef();
  const insideRef = useRef();
  const errorRef = useRef();

  useEffect(() => {
    outsideRef.current.value = undefined;
    outsideRef.current.validate = validate;
  });

  function validate() {
    const inputType = insideRef.current.type;
    const inputValue = insideRef.current.value;
    const isRegexOk = function (inputType, inputValue) {
      if (inputType === "text") {
        inputType = "name";
      }
      for (const rule of validationRules[inputType].rules) {
        if (!rule.regex.test(inputValue)) {
          console.log(inputType);
          console.log(rule.errorMessage);
          errorRef.current.value = rule.errorMessage;
          insideRef.current.className = "forms error";
          setShowImputError(true);
          return false;
        }
      }
    };

    if (isRegexOk(inputType, inputValue)) {
      insideRef.current.className = "forms";
      setShowImputError(false);
      return true;
    }
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
          {showImputError === true && (
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
