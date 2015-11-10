import React from "react";

import Container from "./Container.js";
import Button from "./../Shared/Button.js";

import setCurrentScreenAction from "../../actions/ScreenActions.js";
import { GAME_SCREEN } from "../../actions/ScreenActions.js";

import {setGameModeAction} from "../../actions/GameActions.js";
import {VS_HUMAN, EASY, MEDIUM, HARD} from "../../reducers/Game.js";

const screenTitle = "Tic Tac Toe React";

const MenuScreen = React.createClass({
  PropTypes: {
    dispatch: React.PropTypes.func.isRequired
  },

  headerStyle: {
    textAlign: "center",
    color: "white"
  },

  render () {
    return (
      <Container>
        <h1 style={this.headerStyle}>
          {screenTitle}
        </h1>
        <Button onClick={() => {
                this.props.dispatch(setCurrentScreenAction(GAME_SCREEN))
                this.props.dispatch(setGameModeAction(VS_HUMAN));
              }
            }
            text="Play with Human"
            useWrapper
        />
        <h2 style={this.headerStyle}>
          {"Play with computer"}
        </h2>
        <Button onClick={() => {
                this.props.dispatch(setCurrentScreenAction(GAME_SCREEN))
                this.props.dispatch(setGameModeAction(EASY));
              }
            }
            text="EASY"
            useWrapper
        />
        <Button onClick={() => {
                this.props.dispatch(setCurrentScreenAction(GAME_SCREEN))
                this.props.dispatch(setGameModeAction(MEDIUM));
              }
            }
            text="MEDIUM"
            useWrapper
        />
        <Button onClick={() => {
                this.props.dispatch(setCurrentScreenAction(GAME_SCREEN))
                this.props.dispatch(setGameModeAction(HARD));
              }
            }
            text="HARD"
            useWrapper
        />
      </Container>
    );
  }
});

export default MenuScreen;
