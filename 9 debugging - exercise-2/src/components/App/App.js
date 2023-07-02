// This is basically a layout component

import React from "react";
import "./App.css";
import ChosenWord from "../ChosenWord/ChosenWord";
import TextInput from "../TextInput/TextInput";
import GameOver from "../GameOver/GameOver";
import ResetGameButton from "../ResetGameButton/ResetGameButton";
import GuessesLeft from "../GuessesLeft/GuessesLeft";
import WronglyGuessedLetters from "../WronglyGuessedLetters/WronglyGuessedLetters";

const wordGuessed = (word, guessedLetters) => {
  word = word.split("");
  const remaining = word.filter((letter) => !guessedLetters.includes(letter));
  return remaining.length === 0;
};

const getWrongLetters = (word, guessedLetters) =>
  guessedLetters.filter((letter) => !word.split("").includes(letter));

const isGameOver = (game, wrongLetters, wordWasGuessed) =>
  wordWasGuessed || wrongLetters.length >= game.maxGuesses;

const App = (props) => {
  const game = props.game;
  const wordWasGuessed = wordGuessed(game.chosenWord, game.guessedLetters);
  const wrongLetters = getWrongLetters(game.chosenWord, game.guessedLetters);
  const gameIsOver = isGameOver(game, wrongLetters, wordWasGuessed);

  const gameOver = gameIsOver ? (
    <GameOver chosenWord={game.chosenWord} wordGuessed={wordWasGuessed} />
  ) : null;

  return (
    <div className="App">
      <h1>Simple 'Hangman' Game</h1>
      <p>[no people will actually be harmed during this game]</p>
      {gameOver}
      <TextInput
        currentChosenLetter={game.currentChosenLetter}
        gameIsOver={gameIsOver}
        change={props.chosenLetterHandler}
        submit={props.guessLetterHandler}
      />
      <ChosenWord word={game.chosenWord} guessedLetters={game.guessedLetters} />
      <ResetGameButton click={props.restartGameHandler} />
      <GuessesLeft wrongLetters={wrongLetters} maxGuesses={game.maxGuesses} />
      <WronglyGuessedLetters wrongLetters={wrongLetters} />
    </div>
  );
};

export default App;
// Problem: can't chose a letter
// Problem Tracing:
// - TextInput component props rule out one by one:
// 1. currentChosenLetter OK (state property gets updated with input value)
// 2. change/chosenLetterHandler OK (function updates state property correctly)
// 3. submit/guessLetterHandler: not OK (on submit chosen letter dissapeares from state)
// go over guesLetterHandler line by line:
// inputGiven true OK
// newLetter true OK
// Bug: typo in r51 AppContainer.js: [...this.state.guesedLetters]; (state prop is called guessedLetters)
// Fix: guesedLetters > guessedLetters in r51 AppContainer
