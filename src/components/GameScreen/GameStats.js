import React from "react";

const GameStats = React.createClass({
  PropTypes: {
    victoryStatistics: React.PropTypes.object
  },

  gameStatsStyle: {
    fontSize: "1.5rem",
    margin: "1rem"
  },

  paragraphStyle: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0.4rem 0rem"
  },

  render () {
    return (
      <div style={this.gameStatsStyle}>
        <span>
          Wins
        </span>
        <p style={this.paragraphStyle}>
          X
          <span>
            {this.props.victoryStatistics.x}
          </span>
        </p>
        <p style={this.paragraphStyle}>
          O
          <span>
            {this.props.victoryStatistics.o}
          </span>
        </p>
      </div>
    );
  }
});

export default GameStats;
