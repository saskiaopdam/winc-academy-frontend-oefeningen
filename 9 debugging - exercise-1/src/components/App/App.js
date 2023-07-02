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
  // Problem: when word is guessed, you get lose message
  // Problem Tracing:
  // - GameOver component displays wrong game-over message r31
  // - GameOver component has props.wordGuessed (GameOver.js r21) which is undefined
  // - GameOver component has prop wordGuesed (App.js r31) which is true
  // Bug: typo in wordGuesed r31
  // Fix: changed wordGuesed to wordGuessed r31

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
