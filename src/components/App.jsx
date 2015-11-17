/*
        Главный компонент приложения
 */
import React from "react";
import MenuScreen from "./MenuScreen/MenuScreen.js";
import GameScreen from "./GameScreen/GameScreen.js";
import { connect } from "react-redux";
import {MENU_SCREEN, GAME_SCREEN} from "../actions/ScreenActions.js";

const App = React.createClass({
  PropTypes: {
    currentScreen: React.PropTypes.string,
    gameGrid: React.PropTypes.array,
    victoryStatistics: React.PropTypes.object
  },

  renderScreen(screen) {
    switch(screen) {
    case GAME_SCREEN:
      return (
      <GameScreen cellValues={this.props.gameGrid}
          dispatch={this.props.dispatch}
          victoryStatistics={this.props.victoryStatistics}
      />);
    case MENU_SCREEN:
    default:
      return <MenuScreen dispatch={this.props.dispatch}/>
    }
  },

  render () {
    return this.renderScreen(this.props.currentScreen);
  }
});

function select(state) {
  return {
    currentScreen: state.screen,
    gameGrid: state.game.get("gameGrid").toJS(),
    victoryStatistics: state.game.get("victoryStatistics").toJS()
  }
}

export default connect(select)(App);
