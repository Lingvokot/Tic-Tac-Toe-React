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
    victoryStatistics: React.PropTypes.object,
    buttonClickHandler: React.PropTypes.func.isRequired,
    cellClickHandler: React.PropTypes.func.isRequired
  },

  renderScreen(screen) {
    switch(screen) {
    case GAME_SCREEN:
      return (
      <GameScreen buttonClickHandler={this.props.buttonClickHandler}
          cellClickHandler={this.props.cellClickHandler}
          cellValues={this.props.gameGrid}
          victoryStatistics={this.props.victoryStatistics}
      />);
    case MENU_SCREEN:
    default:
      return <MenuScreen buttonClickHandler={this.props.buttonClickHandler} />
    }
  },

  render () {
    return this.renderScreen(this.props.currentScreen);
  }
});

function select(state) {
  return {
    currentScreen: state.screen,
    gameGrid: state.game.gameGrid,
    victoryStatistics: state.game.victoryStatistics
  }
}

export default connect(select)(App);
