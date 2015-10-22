import React from "react";

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

export default GridCell;
