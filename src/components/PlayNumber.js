import React from "react";
import colors from "./../utils/colors";

const PlayNumber = ({ number, status, onClick }) => {
  return (
    <button
      className="number"
      style={{ backgroundColor: colors[status] }}
      onClick={() => onClick(number, status)}
    >
      {number}
    </button>
  );
};

export default PlayNumber;
