import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import "./Input.scss";

const Input = forwardRef(({ error, ...props }, ref) => {
  return (
    <div className="input-container">
      <input ref={ref} className={`${error ? "error" : ""}`} {...props} />
      {error ? <span className="error">{hadndleError(error.type)}</span> : null}
    </div>
  );
});

Input.propsTypes = {
  error: PropTypes.shape({
    type: PropTypes.string,
    message: PropTypes.string,
    ref: PropTypes.node,
  }),
};

const hadndleError = (errorType) => {
  switch (errorType) {
    case "required":
      return "You must fill this input!";
    default:
      return `Error: ${errorType}`;
  }
};

export default Input;
