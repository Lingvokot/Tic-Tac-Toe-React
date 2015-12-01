import React from "react";

const GameStats = ({victoryStatistics:{x,o}}) => {

  let gameStatsStyle = {
        fontSize: "1.5rem",
        margin: "1rem"
      },
      paragraphStyle = {
        display: "flex",
        justifyContent: "space-between",
        margin: "0.4rem 0rem"
      };
      
  return (
    <div style={gameStatsStyle}>
      <span>
        Wins
      </span>
      <p style={paragraphStyle}>
        X
        <span>
          {x}
        </span>
      </p>
      <p style={paragraphStyle}>
        O
        <span>
          {o}
        </span>
      </p>
    </div>
  );
};

GameStats.propTypes = {
  victoryStatistics: React.PropTypes.object
};

export default GameStats;
