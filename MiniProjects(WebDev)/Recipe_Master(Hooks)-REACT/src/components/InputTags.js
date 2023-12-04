// InputTags Component
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const InputTags = ({ label, onUpdate, value }) => {
  const [tags, setTags] = useState(value);
  const addTags = (e) => {
    if (e.keyCode === 13) {
      let updatedTags = [...tags, { id: uuidv4(), label: e.target.value }];
      setTags(updatedTags);
      onUpdate(updatedTags);
      e.target.value = "";
    }
  };

  const removeTags = (tagId) => {
    let updatedTags = tags.filter(({ id }) => id !== tagId);
    setTags(updatedTags);
    onUpdate(updatedTags);
  };
  return (
    <div className="input-tags">
      <span className="label"> {label} </span>
      <input
        type="text"
        onKeyUp={addTags}
        placeholder="Type and press enter..."
      />
      {tags.map(({ id, label }) => (
        <div className="inp-tag" key={id}>
          {label.toUpperCase()}
          <span className="rem-tag-btn" onClick={() => removeTags(id)}>
            X
          </span>
        </div>
      ))}
    </div>
  );
};

InputTags.defaultProps = {
  onUpdate: () => {},
  value: [],
};

InputTags.propTypes = {
  label: PropTypes.string.isRequired,
  onUpdate: PropTypes.func,
};

export default InputTags;
