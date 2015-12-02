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
    let {dispatch, gameGrid, victoryStatistics} = this.props;
    return (
      <Container>
        <Header text="Tic Tac Toe React"/>
        <Sidebar />
        <MiddleContainer>
          <GameGrid cellClickHandler={(x, y) =>
                dispatch(gameTick({x:x, y:y}))
              }
              gameGrid={gameGrid}
              onUpdate={() =>
                dispatch(gameTick())
              }
          />
        </MiddleContainer>
        <Sidebar>
          <GameStats victoryStatistics={victoryStatistics}/>
          <Button onClick={() => {
                  dispatch(setCurrentScreenAction(MENU_SCREEN));
                  dispatch(resetGameAction());
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
  dispatch: React.PropTypes.func,
  gameGrid: React.PropTypes.arrayOf(
    React.PropTypes.arrayOf(React.PropTypes.string)
  ),
  victoryStatistics: React.PropTypes.objectOf(React.PropTypes.number)
};


export default GameScreen;
