import React from "react";

import Container from "./Container.js";
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import MiddleContainer from "./MiddleContainer.js";

import GameGrid from "./GameGrid.js";
import GameStats from "./GameStats.js";
import Button from "./../Shared/Button.js";

import setCurrentScreenAction from "../../actions/ScreenActions.js";
import { MENU_SCREEN } from "../../actions/ScreenActions.js";
import gameTick from "../../actions/GameActions.js";
import { resetGameAction } from "../../actions/GameActions.js";

const GameScreen = React.createClass({
  PropTypes: {
    dispatch: React.PropTypes.func,
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
          <GameGrid cellClickHandler={(x, y) =>
                this.props.dispatch(gameTick({x:x, y:y}))
              }
              cellValues={this.props.cellValues}
              onUpdate={() =>
                this.props.dispatch(gameTick())
              }
          />
        </MiddleContainer>
        <Sidebar>
          <GameStats victoryStatistics={this.props.victoryStatistics} />
          <Button onClick={() => {
                  this.props.dispatch(setCurrentScreenAction(MENU_SCREEN));
                  this.props.dispatch(resetGameAction());
                }
              }
              text="Menu"
          />
        </Sidebar>
      </Container>
    );
  }
});

export default GameScreen;
