import React from "react";

const imageX = "images/x.png";
const imageO = "images/o.png";

const GameGrid = React.createClass({
  PropTypes: {
    cellClickHandler: React.PropTypes.func.isRequired,
    cellValues: React.PropTypes.array
  },

  gameGridStyle: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    alignContent: "space-between",
    width: "30rem",
    height: "30rem",
    backgroundColor: "#123456"
  },

  renderGrid(girdSize) {

    var grid = [];
    for(let i = 0; i < girdSize; i++) {
      for(let j = 0; j < girdSize; j++) {
        grid.push(
          <GridCell cellClickHandler={this.props.cellClickHandler}
            cellValue={this.props.cellValues[i][j]}
            key={i+""+j}
            x={i} y={j}
          />);
      }
    }
    return grid;
  },

  render () {
    return (
      <div style={this.gameGridStyle}>
        {this.renderGrid(this.props.cellValues.length)}
      </div>
    );
  }
});

const GridCell = React.createClass({
  PropTypes: {
    cellClickHandler: React.PropTypes.func.isRequired,
    x: React.PropTypes.number,
    y: React.PropTypes.number
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
    switch(this.props.cellValue) {
      case "x":
        return <Image image={imageX} />;
      case "o":
        return <Image image={imageO} />
      default:
        return;
    }
  },

  cellClicked() {
     this.props.cellClickHandler(this.props.x, this.props.y);
  },

  render () {
    return (
      <div onClick={this.cellClicked}
        style={this.gridCellStyle}>
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
