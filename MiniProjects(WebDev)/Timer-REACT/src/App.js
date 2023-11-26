import React, { Component } from "react";
import Timer from "./Timer";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    timers: [],
  };
  addTimer = (name) =>
    this.setState({ timers: [{ id: uuidv4(), name }, ...this.state.timers] });
  removeTimer = (id) =>
    this.setState({
      timers: this.state.timers.filter((t) => t.id !== id),
    });
  render() {
    return (
      <div className="container">
        <div className="create-timer">
          <input
            type="text"
            placeholder="Title"
            onKeyUp={(e) => {
              if (e.keyCode === 13) {
                this.addTimer(e.target.value);
                e.target.value = "";
              }
            }}
          />
        </div>
        <div className="timer-bench">
          {this.state.timers.map((t) => (
            <Timer
              name={t.name}
              key={t.id}
              onRemove={() => this.removeTimer(t.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
