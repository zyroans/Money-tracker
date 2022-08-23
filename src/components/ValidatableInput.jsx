import React, { useEffect } from "react";
import { useState, useRef } from "react";

function ValidatableInput({ className, placeholder, name, type, isRequired, outsideRef }) {

    let passwordEye = useRef();
    let inputRef = useRef();
    const [passwordIcon, setPasswordIcon] = useState("show");

    function validate() {
        if (type == "password") {
            inputRef.current.className = "forms error"
            return false
        }
        return false
    }

    outsideRef.current.validate = validate;

    function togglePassword() {
        let currentType = inputRef.current.type
        console.log("current type", currentType)
        inputRef.current.type = currentType === "text" ? "password" : "text"
        setPasswordIcon(inputRef.current.type === "password" ? "show" : "hide")
    }

    return (
        <div>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                className={className}
                ref={inputRef}
            ></input>
            {type === "password" &&
                <i className="eye" ref={passwordEye} onClick={togglePassword}>
                    <img alt="eye" src={`/assets/${passwordIcon}.png`}></img>
                </i>
            }

        </div>
    );
}

ValidatableInput.defaultProps = {
    outsideRef: { current: {} }
}

export default ValidatableInput;
