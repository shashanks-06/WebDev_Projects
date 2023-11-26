import React from 'react';

const CodeInput = ({ onSet }) => {
  return (
    <div className="code-input">
      <input type="text" onChange={(e) => onSet(e.target.value)} />
    </div>
  );
};

export default CodeInput;
