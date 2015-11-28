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

class GameScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header
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
}

GameScreen.propTypes = {
  cellValues: React.PropTypes.array,
  dispatch: React.PropTypes.func,
  victoryStatistics: React.PropTypes.object
};


export default GameScreen;
