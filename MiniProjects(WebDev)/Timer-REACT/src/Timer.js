import React, { Component } from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment);

class Timer extends Component {
  state = {
    seconds: 0,
    isPaused: false,
  };
  componentDidMount = () => {
    this.timerInstance = setInterval(() => {
      if (!this.state.isPaused) {
        this.setState({
          seconds: this.state.seconds + 1,
        });
      }
    }, 1000);
  };
  componentWillUnmount = () => {
    clearInterval(this.timerInstance);
  };
  formatTime = (seconds) =>
    moment.duration(seconds, "seconds").format("HH:mm:ss");
  render() {
    return (
      <div className="timer">
        <div className="timer-name">
          {this.props.name} {this.state.isPaused ? "(Paused)" : null}{" "}
        </div>
        <div className="timer-display">
          {this.formatTime(this.state.seconds)}
        </div>
        <div
          class="pauseBtn"
          onClick={() => this.setState({ isPaused: !this.state.isPaused })}
        />
        <div class="removeBtn" onClick={() => this.props.onRemove()} />
      </div>
    );
  }
}

export default Timer;
