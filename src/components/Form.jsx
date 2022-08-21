import React from "react";
// import { useRef } from "react";
import PropTypes from "prop-types";

function Form({ type, className, required, minLength, name }) {
  // const {ref} = useRef()
  return (
    <input
      type={type}
      className={className}
      required={required}
      minLength={minLength}
      placeholder={name}
      name={name}
    ></input>
  );
}

Form.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
  minLength: PropTypes.number,
  placeholder: PropTypes.string,
  name: PropTypes.string,
};

export default Form;
