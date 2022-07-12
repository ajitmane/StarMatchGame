import utils from "../utils/utils";
import React, { useState, useEffect } from "react";

const useGameState = () => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setCandidateNums] = useState([]);
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    if (seconds > 0 && availableNums.length > 0) {
      const timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [seconds]);

  const getGameState = (newCandidates) => {
    if (utils.sum(newCandidates) !== stars) {
      setCandidateNums(newCandidates);
    } else {
      const newAvailableNums = availableNums.filter(
        (n) => !newCandidates.includes(n)
      );
      setStars(utils.randomSumIn(newAvailableNums, 9));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
    }
  };

  return { stars, availableNums, candidateNums, seconds, getGameState };
};

export default useGameState;
