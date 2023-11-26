import React from "react";

const Joke = ({setup, punchline}) => (
  <div className="joke-panel">
    <div className="joke-setup">{setup}</div>
    <div className="joke-punchline">{punchline}</div>
  </div>
);

export default Joke;
