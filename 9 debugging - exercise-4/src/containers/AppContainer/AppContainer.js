import React from "react";
import App from "../../components/App/App";

const wordList = [
  "vis",
  "toeter",
  "developer",
  "telefoon",
  "moeder",
  "snoer",
  "geeuw",
];

const maxGuesses = 5;

class AppContainer extends React.Component {
  state = {
    chosenWord: "",
    guessedLetters: [],
    currentChosenLetter: "",
    maxGuesses: maxGuesses,
  };

  chooseWord(list) {
    let index = Math.floor(Math.random() * list.length);
    console.log(`We chose word: ${list[index]}`);
    return list[index];
  }

  restartGameHandler = (event) => {
    this.setState({
      chosenWord: this.chooseWord(wordList),
      guessedLetters: [],
      currentChosenLetter: "",
    });
  };

  chosenLetterHandler = (event) => {
    const newState = { ...this.state };
    newState.currentChosenLetter = event.target.value;
    this.setState(newState);
  };

  guessLetterHandler = (event) => {
    if (this.state.currentChosenLetter.length > 0) {
      const newGuessedLetters = [...this.state.guessedLetters];
      newGuessedLetters.push(this.state.currentChosenLetter);
      this.setState({
        guessedLetters: newGuessedLetters,
        currentChosenLetter: "",
      });
    }
    event.preventDefault();
  };

  // Problem: guessing possible with no input
  // Tracing Problem: when clicking guess button, "" get's added to guessedLetters in state
  // - TextInput component: props.submit
  // - App component: submit= {props.guessedLetterHandler}
  // - AppContainer component: examine guessedLetterHandler function
  // Bug: r45-50 (function pushes currentChosenLetter to newGuessedLetters without checking for input)
  // Fix: wrap r45-50 in if statement checking for input length
  componentDidMount = () => {
    this.restartGameHandler();
  };

  render() {
    return (
      <App
        game={this.state}
        chosenLetterHandler={this.chosenLetterHandler}
        guessLetterHandler={this.guessLetterHandler}
        restartGameHandler={this.restartGameHandler}
      />
    );
  }
}

export default AppContainer;
