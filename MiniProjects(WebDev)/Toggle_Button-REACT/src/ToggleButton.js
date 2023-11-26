import React, { Component } from "react";

class ToggleButton extends Component {
  state = {
    isOn: false,
  };
  render() {
    return (
      <div className="toggle-button">
        <button
          className={this.state.isOn ? "btn btn-on" : "btn btn-off"}
          onClick={() => this.setState({ isOn: !this.state.isOn })}
        >
          {this.state.isOn ? "On" : "Off"}
        </button>
      </div>
    );
  }
}

export default ToggleButton;
