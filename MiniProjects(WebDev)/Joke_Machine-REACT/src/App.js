import React, { Component } from "react";
import "./index.css";
import Joke from "./Joke";

class App extends Component {
  state = {
    joke: {},
    isLoading: false,
  };
  getJoke = async () => {
    this.setState({
      isLoading: true,
    });
    const callJokeApi = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const resolveJoke = await callJokeApi.json();

    this.setState({
      joke: resolveJoke,
      isLoading: false,
    });
  };
  componentDidMount = () => this.getJoke();

  render() {
    return (
      <div className="container">
        <div
          className={this.state.isLoading ? "title title-pulse" : "title"}
          onClick={this.getJoke}
        >
          Joke Machine
        </div>
        <Joke
          setup={this.state.joke.setup}
          punchline={this.state.joke.punchline}
        />
      </div>
    );
  }
}

export default App;
