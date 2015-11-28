import React from "react";

import Container from "./Container.js";
import Button from "./../Shared/Button.js";

import setCurrentScreenAction from "../../actions/ScreenActions.js";
import { GAME_SCREEN } from "../../actions/ScreenActions.js";

import {setGameModeAction} from "../../actions/GameActions.js";
import {VS_HUMAN, EASY, MEDIUM, HARD} from "../../reducers/Game.js";

const screenTitle = "Tic Tac Toe React";

const MenuScreen = (props) => {
  let headerStyle = {
    textAlign: "center",
    color: "white"
  };

  return (
    <Container>
      <h1 style={headerStyle}>
        {screenTitle}
      </h1>
      <Button onClick={() => {
              props.dispatch(setCurrentScreenAction(GAME_SCREEN))
              props.dispatch(setGameModeAction(VS_HUMAN));
            }
          }
          text="Play with Human"
          useWrapper
      />
      <h2 style={headerStyle}>
        {"Play with computer"}
      </h2>
      <Button onClick={() => {
              props.dispatch(setCurrentScreenAction(GAME_SCREEN))
              props.dispatch(setGameModeAction(EASY));
            }
          }
          text="EASY"
          useWrapper
      />
      <Button onClick={() => {
              props.dispatch(setCurrentScreenAction(GAME_SCREEN))
              props.dispatch(setGameModeAction(MEDIUM));
            }
          }
          text="MEDIUM"
          useWrapper
      />
      <Button onClick={() => {
              props.dispatch(setCurrentScreenAction(GAME_SCREEN))
              props.dispatch(setGameModeAction(HARD));
            }
          }
          text="HARD"
          useWrapper
      />
    </Container>
  );
};

MenuScreen.propTypes = {
  dispatch: React.PropTypes.func.isRequired
}

export default MenuScreen;
