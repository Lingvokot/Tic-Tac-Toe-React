import React from "react";

const imageX = "images/x.png";
const imageO = "images/o.png";

const GameGrid = React.createClass({
  componentDidUpdate() {
    this.props.onUpdate();
  },

  PropTypes: {
    cellClickHandler: React.PropTypes.func.isRequired,
    cellValues: React.PropTypes.array.isRequired,
    onUpdate: React.PropTypes.func
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

  renderGrid(grid, clickHandler) {
    var gridToRender = [];
    for(let i = 0; i < grid.length; i++) {
      for(let j = 0; j < grid[i].length; j++) {
        gridToRender.push(
          <GridCell clickHandler={clickHandler}
              cellValue={grid[i][j]}
              key={i+""+j}
              x={i}
              y={j}
          />
        );
      }
    }
    return gridToRender;
  },

  render () {
    return (
      <div style={this.gameGridStyle}>
        {this.renderGrid(this.props.cellValues, this.props.cellClickHandler)}
      </div>
    );
  }
});

export const GridCell = React.createClass({
  PropTypes: {
    clickHandler: React.PropTypes.func.isRequired,
    cellValue: React.PropTypes.string,
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

  renderImage: function(value) {
    switch(value) {
      case "x":
        return <Image image={imageX} />;
      case "o":
        return <Image image={imageO} />
      default:
        return;
    }
  },

  onClick() {
     this.props.clickHandler(this.props.x, this.props.y);
  },

  render () {
    return (
      <div onClick={this.onClick}
          style={this.gridCellStyle}
      >
        {this.renderImage(this.props.cellValue)}
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
