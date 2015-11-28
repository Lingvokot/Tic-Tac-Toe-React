import React from "react";

export const imageX = "images/x.png";
export const imageO = "images/o.png";

class GameGrid extends React.Component {
  componentDidUpdate() {
    this.props.onUpdate();
  }

  renderGrid(grid, clickHandler) {
    var gridToRender = [];
    for(let i = 0; i < grid.length; i++) {
      for(let j = 0; j < grid[i].length; j++) {
        gridToRender.push(
          <GridCell cellValue={grid[i][j]}
              clickHandler={clickHandler}
              key={i+""+j}
              x={i}
              y={j}
          />
        );
      }
    }
    return gridToRender;
  }

  render() {
    return (
      <div style={gameGridStyle}>
        {this.renderGrid(this.props.cellValues, this.props.cellClickHandler)}
      </div>
    );
  }
}

GameGrid.propTypes = {
  cellClickHandler: React.PropTypes.func,
  cellValues: React.PropTypes.array,
  onUpdate: React.PropTypes.func
};

let gameGridStyle = {
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "space-between",
  alignContent: "space-between",
  width: "30rem",
  height: "30rem",
  backgroundColor: "#123456"
};

class GridCell extends React.Component {

  renderImage(value) {
    switch(value) {
      case "x":
        return <Image image={imageX} />;
      case "o":
        return <Image image={imageO} />
      default:
        return;
    }
  }

  render() {
    return (
      <div onClick={() => this.props.clickHandler(this.props.x, this.props.y)}
          style={gridCellStyle}
      >
        {this.renderImage(this.props.cellValue)}
      </div>
    );
  }
}

GridCell.propTypes = {
  cellValue: React.PropTypes.string,
  clickHandler: React.PropTypes.func.isRequired,
  x: React.PropTypes.number,
  y: React.PropTypes.number
};


let gridCellStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "9.7rem",
  height: "9.7rem",
  backgroundColor: "#6f71a0"
};

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

Image.propTypes = {
  image: React.PropTypes.string
}

export default GameGrid;
