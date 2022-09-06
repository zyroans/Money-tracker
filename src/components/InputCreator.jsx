import React from "react";
import { useState, useRef, useEffect } from "react";
import validationRules from "../utils/RegEx";

function InputCreator({ type, className, name, outsideRef, inputName }) {
  const [passwordIcon, setPasswordIcon] = useState("show");
  const [showImputError, setShowImputError] = useState(false);
  const passwordEye = useRef();
  const insideRef = useRef();
  const [errorMessagePrint, setErrorMessagePrint] = useState();

  useEffect(() => {
    outsideRef.current.value = undefined;
    outsideRef.current.validate = validate;
  });

  function validate() {
    const inputType = inputName;
    const inputValue = insideRef.current.value;
    console.log(`HERE WE GO WITH ${inputType}`);
    const isRegexOk = function (inputType, inputValue) {
      const errorMessageFound = [];
      console.log(`EL ARRAY INICIALIZADO`);
      console.log(errorMessageFound);
      console.log("IS REGEXOK RUNNING");
      if (inputType === "text") {
        inputType = "name";
      }
      for (const rule of validationRules[inputType].rules) {
        console.log(`VAMOS A VER SI ${inputValue} CUMPLE CON ${rule.regex}`);
        console.log(`EL TEST ES: ${rule.regex.test(inputValue)}`);
        if (!rule.regex.test(inputValue)) {
          console.log("ESTAMOS EXPRESION NO SE CUMPLIO");
          errorMessageFound.push(rule.errorMessage);
          console.log(`ESTO SE GUARDA EN EL ARRAY ${errorMessageFound}`);
        }
      }
      console.log(`EL ARRAY DESPUES DEL FOR`);
      console.log(errorMessageFound);
      if (errorMessageFound.length > 0) {
        console.log("ENTRAMOS CUANDO NO SE CUMPLE LA EXPRESION");
        setErrorMessagePrint(
          `${inputType} should contain at  least ${errorMessageFound.join(
            ", "
          )}`
        );
        return false;
      } else {
        console.log("LA EXPRESION SE CUMPLIO");
        return true;
      }
    };

    if (isRegexOk(inputType, inputValue)) {
      console.log(`EL VALOR ${inputValue} CUMPLIO LAS EXPRESIONES`);
      insideRef.current.className = "forms";
      setShowImputError(false);
      return true;
    }
    console.log("NO SE QUE PASA");
    insideRef.current.className = "forms error";
    setShowImputError(true);
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
        <div className="error-container">
          {showImputError === true && (
            <p className="error-message">{errorMessagePrint}</p>
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
