import React from "react";

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

const GridCell = React.createClass({
  gridCellStyle: {
    width: "9.7rem",
    height: "9.7rem",
    backgroundColor: "#6f71a0"
  },

  render () {
    return (
      <div style={this.gridCellStyle}>

      </div>
    );
  }
});

export default GameGrid;
