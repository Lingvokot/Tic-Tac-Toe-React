import React from "react";

import Container from "./Container.js";
import Button from "./../Shared/Button.js";

import setCurrentScreenAction from "../../actions/ScreenActions.js";
import { GAME_SCREEN } from "../../actions/ScreenActions.js";

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
        <Button onClick={() => this.props.dispatch(
                setCurrentScreenAction(GAME_SCREEN)
              )}
            text="Play with Human"
            useWrapper
        />
        <h2 style={this.headerStyle}>
          {"Play with computer"}
        </h2>
        <Button buttonClickHandler={()=>1}
            text="EASY"
            useWrapper
        />
        <Button buttonClickHandler={()=>1}
            text="MEDIUM"
            useWrapper
        />
        <Button buttonClickHandler={()=>1}
            text="HARD"
            useWrapper
        />
      </Container>
    );
  }
});

export default MenuScreen;
