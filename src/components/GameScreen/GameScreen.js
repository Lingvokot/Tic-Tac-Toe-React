import React from "react";

import Container from "./Container.js";
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import MiddleContainer from "./MiddleContainer.js";

import GameGrid from "./GameGrid.js";
import GameStats from "./GameStats.js";
import Button from "./../Shared/Button.js";

const MENU_BUTTON = "Menu";

const GameScreen = React.createClass({
  PropTypes: {
    buttonClickHandler: React.PropTypes.func.isRequired,
    cellClickHandler: React.PropTypes.func.isRequired,
    cellValues: React.PropTypes.array,
    victoryStatistics: React.PropTypes.object
  },

  containerStyle: {
    fontSize: "3rem",
    fontWeight: "bold",
    textAlign: "center",
    width: "60rem",
    margin: "auto"
  },

  render () {
    return (
      <Container>
        <Header style={this.containerStyle}
            text="Tic Tac Toe React"
        />
        <Sidebar />
        <MiddleContainer>
          <GameGrid cellClickHandler={this.props.cellClickHandler}
             cellValues={this.props.cellValues} />
        </MiddleContainer>
        <Sidebar>
          <GameStats victoryStatistics={this.props.victoryStatistics} />
          <Button buttonClickHandler={this.props.buttonClickHandler}
              text={MENU_BUTTON}
          />
        </Sidebar>
      </Container>
    );
  }
});

export default GameScreen;
