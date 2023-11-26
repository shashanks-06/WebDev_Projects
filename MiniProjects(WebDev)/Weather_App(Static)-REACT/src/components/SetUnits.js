// SetUnits Component
import React from "react";
import PropTypes from "prop-types";

const SetUnits = ({ value, onSet }) => {
  return (
    <div className="set-units">
      <label>UNITS</label>
      <select value={value} onChange={onSet}>
        <option value="C">Celsius</option>
        <option value="F">Fahrenheit</option>
      </select>
    </div>
  );
};
SetUnits.propTypes = {
  value: PropTypes.string.isRequired,
  onSet: PropTypes.func.isRequired,
};
export default SetUnits;
