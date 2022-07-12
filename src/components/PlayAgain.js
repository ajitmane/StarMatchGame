import React from "react";

const PlayAgain = ({ onClick, gameStatus }) => {
  return (
    <>
      <div
        className="message"
        style={{ color: gameStatus == "won" ? "green" : "red" }}
      >
        {gameStatus == "won" ? "Nice" : "Game Over"}
      </div>
      <button onClick={onClick}>Play Again</button>
    </>
  );
};

export default PlayAgain;
