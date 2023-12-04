// Select Component
import React from "react";
import PropTypes from "prop-types";

const Select = ({ label, options, onSet }) => {
  return (
    <div className="select-list">
      <span className="label">{label}</span>
      <select onChange={onSet} defaultValue="Select">
        <option disabled> Select </option>
        {options &&
          options.map((value, index) => <option key={index}> {value} </option>)}
      </select>
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onSet: PropTypes.func,
};

export default Select;
