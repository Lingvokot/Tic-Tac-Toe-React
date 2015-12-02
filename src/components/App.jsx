/*
        Главный компонент приложения
 */
import React from "react";
import MenuScreen from "./MenuScreen/MenuScreen.js";
import GameScreen from "./GameScreen/GameScreen.js";
import { connect } from "react-redux";
import {MENU_SCREEN, GAME_SCREEN} from "../actions/ScreenActions.js";

class App extends React.Component {

  renderScreen({currentScreen, ...gameProps}) {
    switch(currentScreen) {
    case GAME_SCREEN:
      return <GameScreen {...gameProps}/>
    case MENU_SCREEN:
    default:
      let {dispatch} = gameProps;
      return <MenuScreen dispatch={dispatch}/>
    }
  }

  render () {
    return this.renderScreen(this.props);
  }
}

App.propTypes = {
  currentScreen: React.PropTypes.string,
  dispatch: React.PropTypes.func.isRequired,
  gameGrid: React.PropTypes.arrayOf(
    React.PropTypes.arrayOf(React.PropTypes.string)
  ),
  victoryStatistics: React.PropTypes.objectOf(React.PropTypes.number)
};

function select({screen, game}) {
  return {
    currentScreen: screen,
    gameGrid: game.get("gameGrid").toJS(),
    victoryStatistics: game.get("victoryStatistics").toJS()
  }
}

export default connect(select)(App);
