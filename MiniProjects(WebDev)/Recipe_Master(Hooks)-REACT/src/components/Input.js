// Input Component
import React from "react";
import PropTypes from "prop-types";

const Input = ({ label, onInput, value }) => {
  return (
    <div className="input-box">
      <span className="label">{label}</span>
      <input type="text" onChange={onInput} value={value}></input>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  onInput: PropTypes.func,
};

export default Input;
