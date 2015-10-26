import React from "react";

const imageX = "images/x.png";
const imageO = "images/o.png";

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
  getInitialState: function () {
    return {
      cellValue: "none"
    }
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    return nextState.cellValue !== this.state.cellValue;
  },

  gridCellStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "9.7rem",
    height: "9.7rem",
    backgroundColor: "#6f71a0"
  },

  renderImage: function() {
    switch(this.state.cellValue) {
      case "x":
        return <Image image={imageX} />;
      case "o":
        return <Image image={imageO} />
      default:
        return;
    }
  },

  render () {
    return (
      <div style={this.gridCellStyle}>
        {this.renderImage()}
      </div>
    );
  }
});

const Image = (props) => {
  var imageStyle = {
    width: "95%"
  }

  return (
    <img src={props.image}
        style={imageStyle}
    />
  );

};

export default GameGrid;
