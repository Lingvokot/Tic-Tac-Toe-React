import React from "react";

const GameStats = (props) => {

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
          {props.victoryStatistics.x}
        </span>
      </p>
      <p style={paragraphStyle}>
        O
        <span>
          {props.victoryStatistics.o}
        </span>
      </p>
    </div>
  );
};

GameStats.propTypes = {
  victoryStatistics: React.PropTypes.object
};

export default GameStats;
