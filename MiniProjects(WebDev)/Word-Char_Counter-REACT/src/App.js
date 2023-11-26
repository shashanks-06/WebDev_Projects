import React, { Component } from "react";
import "./App.css";

// Create a class component here
class App extends Component {
  state = {
    text: "",
  };
  render() {
    return (
      <div className="app">
        <textarea
          id="text-area"
          onChange={(e) => this.setState({ text: e.target.value })}
        />
        <div id="char-count">{this.state.text.length} character(s)</div>
        <div id="word-count">
          {this.state.text ? this.state.text.match(/\w+/gim).length : 0} word(s)
        </div>
      </div>
    );
  }
}

export default App;
