import React from "react";
// import { useRef } from "react";
import PropTypes from "prop-types";
import "../App.css";

const Form = React.forwardRef((props, ref) => (
  <input
    ref={ref}
    type={props.type}
    className={props.className}
    required={props.required}
    minLength={props.minLength}
    placeholder={props.name}
    name={props.name}
  ></input>
));

Form.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
  minLength: PropTypes.number,
  placeholder: PropTypes.string,
  name: PropTypes.string,
};

export default Form;
