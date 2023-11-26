// SearchResults Component
import React from "react";
import PropTypes from "prop-types";

const SearchResults = ({ data, selectLocation }) => {
  return (
    <div className="search-results">
      {Array.isArray(data) &&
        data.map(({ id, name }) => (
          <div
            className="search-option"
            key={id}
            onClick={selectLocation.bind(this, id)}
          >
            {name}
          </div>
        ))}
    </div>
  );
};
SearchResults.propTypes = {
  data: PropTypes.array.isRequired,
  selectLocation: PropTypes.func.isRequired,
};
export default SearchResults;
