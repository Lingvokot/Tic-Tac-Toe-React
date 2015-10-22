import React from "react";
import GridCell from "./GridCell.jsx";

const GameGrid = React.createClass({
  gameGridStyle: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    alignContent: "space-between",
    width: "30rem",
    height: "30rem",
    backgroundColor: "#123456"
  },

  render () {
    return (
      <div style={this.gameGridStyle}>
        <GridCell/><GridCell/><GridCell/>
        <GridCell/><GridCell/><GridCell/>
        <GridCell/><GridCell/><GridCell/>
      </div>
    );
  }
});

export default GameGrid;
