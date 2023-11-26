import React, { useState } from "react";
import "./App.css";

const dark = {
  content: {
    backgroundColor: "rgb(60,60,60)",
    color: "rgb(255,255,255)",
    padding: 10,
  },
  title: {
    fontSize: "45px",
    margin: 0,
  },
  paragraph: {
    fontSize: "18px",
    lineHeight: 1.25,
  },
  moral: {
    fontWeight: "bold",
    color: "rgb(200,200,0)",
  },
};

const light = {
  content: {
    backgroundColor: "rgb(255,255,255)",
    color: "rgb(0,0,0)",
    padding: 10,
  },
  title: {
    fontSize: "45px",
    margin: 0,
  },
  paragraph: {
    fontSize: "18px",
    lineHeight: 1.25,
  },
  moral: {
    fontWeight: "bold",
  },
};

const App = () => {
  const [theme, setTheme] = useState(light);
  return (
    <div className="app">
      <div className="theme-buttons">
        <div id="light-theme" onClick={() => setTheme(light)} />
        <div id="dark-theme" onClick={() => setTheme(dark)} />
      </div>
      <div id="content" style={theme.content}>
        <h1 id="title" style={theme.title}>
          The Wise Man
        </h1>
        <p id="text" style={theme.paragraph}>
          People have been coming to the wise man, complaining about the same
          problems every time. One day he told them a joke and everyone roared
          in laughter. <br />
          <br />
          After a couple of minutes, he told them the same joke and only a few
          of them smiled. <br />
          <br />
          When he told the same joke for the third time no one laughed anymore.
          The wise man smiled and said: “You can’t laugh at the same joke over
          and over. So why are you always crying about the same problem?”
          <br />
          <br />
          <span style={theme.moral}>
            Moral of the story: Worrying won’t solve your problems, it’ll just
            waste your time and energy.
          </span>
        </p>
      </div>
    </div>
  );
};

export default App;
