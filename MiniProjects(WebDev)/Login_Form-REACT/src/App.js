import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const registerBtnHandler = () => {
    if (name && email) {
      setIsComplete(true);
    }
  };
  return (
    <div className="app">
      <h1 id="title">Register</h1>
      {!isComplete ? (
        <div className="form-fields">
          <input id="name-fld" type="text" placeholder="Name" onChange={e => setName(e.target.value) } />
          <input id="email-fld" type="text" placeholder="E-Mail" onChange={e => setEmail(e.target.value)} />
          <button id="register-btn" onClick={registerBtnHandler} >Register </button>
        </div>
      ) : (
        <h1 id="confirm">
          Thank you, {name}! We will contact you shortly on {email}
        </h1>
      )}
    </div>
  );
};

export default App;
