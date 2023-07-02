import React from "react";
import win from "../../assets/win.gif";
import lose from "../../assets/lose.gif";

const GameOver = (props) => {
  const winResult = (
    <div className="win">
      <h2>You won!</h2>
      <img src={win} alt="win" />
    </div>
  );

  const loseResult = (
    <div className="lose">
      <h2>You lost..</h2>
      <img src={lose} alt="lose" />
      <p>The chosen word was: {props.chosenWord}</p>
    </div>
  );
  console.log(props.wordGuessed);
  return props.wordGuessed ? winResult : loseResult;
};
// debugger GameOver.js
// - watch wordGuessed: undefined
// - props: wordGuesed: true
// traced: row 31 in App.js

export default GameOver;
