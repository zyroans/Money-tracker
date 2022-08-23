import React from "react";
// import { useRef } from "react";
import PropTypes from "prop-types";

const Form = React.forwardRef(
  (type, className, required, minLength, name, ref) => (
    <input
      type={type}
      className={className}
      required={required}
      minLength={minLength}
      placeholder={name}
      name={name}
      ref={ref}
    ></input>
  )
);

Form.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
  minLength: PropTypes.number,
  placeholder: PropTypes.string,
  name: PropTypes.string,
};

export default Form;
