// List Component
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const List = ({ label, onUpdate, value }) => {
  const [items, setItems] = useState(value);
  const addItems = (e) => {
    if (e.keyCode === 13) {
      let updatedItems = [...items, { id: uuidv4(), label: e.target.value }];
      setItems(updatedItems);
      onUpdate(updatedItems);
      e.target.value = "";
    }
  };
  const removeItems = (itemId) => {
    let updatedItems = items.filter(({ id }) => id !== itemId);
    setItems(updatedItems);
    onUpdate(updatedItems);
  };
  return (
    <div className="list">
      <span className="label">{label} </span>
      <input
        type="text"
        onKeyUp={addItems}
        placeholder="Type and press enter..."
      />
      {items.map(({ id, label }) => (
        <div className="list-item" key={id}>
          {label.toUpperCase()}
          <span className="rem-item-btn" onClick={() => removeItems(id)}>
            X
          </span>
        </div>
      ))}
    </div>
  );
};

List.defaultProps = {
  onUpdate: () => {},
  value: [],
};

List.propTypes = {
  label: PropTypes.string.isRequired,
  onUpdate: PropTypes.func,
};

export default List;
