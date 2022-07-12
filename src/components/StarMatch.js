import React, { useState, useEffect } from "react";
import utils from "../utils/utils";
import "../components/StarMatch.css";
import PlayNumber from "./PlayNumber";
import StarDisplay from "./StarDisplay";
import PlayAgain from "./PlayAgain";
import useGameState from "../hooks/useGameState";

const StarMatch = ({ resetgame }) => {
  const {
    stars,
    availableNums,
    candidateNums,
    seconds,
    getGameState,
  } = useGameState();

  const candidatesWrong = utils.sum(candidateNums) > stars;

  const gameStatus =
    availableNums.length === 0 ? "won" : seconds === 0 ? "lost" : "active";

  const onNumberClick = (number, currentStatus) => {
    if (gameStatus != "active" && currentStatus == "used") {
      return;
    }
    const newCandidates =
      currentStatus == "available"
        ? [...candidateNums, number]
        : candidateNums.filter((n) => n !== number);

    getGameState(newCandidates);
  };

  const numStatus = (number) => {
    if (!availableNums.includes(number)) {
      return "used";
    } else if (candidateNums.includes(number)) {
      return candidatesWrong ? "wrong" : "candidate";
    } else {
      return "available";
    }
  };

  const resetGame = () => {
    resetgame();
  };

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {gameStatus != "active" ? (
            <PlayAgain onClick={resetGame} gameStatus={gameStatus} />
          ) : (
            <StarDisplay count={stars} />
          )}
        </div>
        <div className="right">
          {utils.range(1, 9).map((number) => (
            <PlayNumber
              status={numStatus(number)}
              key={number}
              number={number}
              onClick={onNumberClick}
            />
          ))}
        </div>
      </div>
      <div className="timer">Time Remaining: {seconds}</div>
    </div>
  );
};

export default StarMatch;
