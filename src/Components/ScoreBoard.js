import React from "react";
import { useSelector } from "react-redux";

const ScoreBoard = () => {
  const { gamesPlayed, gamesWon, gamesLost, score } = useSelector(
    (state) => state
  );

  return (
    <div className="table">
      <div className="score">
        <div
          style={{
            padding: "10px",
            margin: "10px",
            backgroundColor: "rgb(186, 203, 219)",
            borderRadius: "8px",
          }}
        >
          <strong style={{ fontSize: "2rem" }}>
            Moves: {gamesPlayed}
          </strong>
        </div>
        <div 
          style={{
            padding: "10px",
            margin: "10px",
            backgroundColor: "rgb(186, 203, 219)",
            borderRadius: "8px",
            }}
          >
          <strong style={{ fontSize: "2rem" }}>Games Won: {gamesWon}</strong>
        </div>
        <div 
        style={{
          padding: "10px",
          margin: "10px",
          backgroundColor: "rgb(186, 203, 219)",
          borderRadius: "8px",
          }}
        >
          <strong style={{ fontSize: "2rem" }}>Games Lost: {gamesLost}</strong>
        </div>
        <div 
        style={{
          padding: "10px",
          margin: "10px",
          backgroundColor: "rgb(186, 203, 219)",
          borderRadius: "8px",
          }}
        >
          <strong style={{ fontSize: "2rem" }}>Score: {score}</strong>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
