// Icon Component
import React from "react";
import PropTypes from "prop-types";
// Load Images
import meat from "../icons/meat.png";
import poultry from "../icons/poultry.png";
import seafood from "../icons/seafood.png";
import vegetarian from "../icons/veg.png";
import vegan from "../icons/vegan.png";

const icons = { meat, poultry, seafood, vegetarian, vegan };

const Icon = ({ type }) => {
  return (
    <div className="icon">
      <img src={icons[type.toLowerCase()]} alt={type} />
      <p>{type.toUpperCase()}</p>
    </div>
  );
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Icon;
