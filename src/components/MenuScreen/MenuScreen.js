import React from "react";

import Container from "./Container.js";
import Button from "./../Shared/Button.js";

const screenTitle = "Tic Tac Toe React";

const GameScreen = React.createClass({
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
        <Button  text="Play with Human"
            useWrapper
        />
        <h2 style={this.headerStyle}>
          {"Play with computer"}
        </h2>
        <Button text="EASY"
            useWrapper
        />
        <Button text="MEDIUM"
            useWrapper
        />
        <Button text="HARD"
            useWrapper
        />
      </Container>
    );
  }
});

export default GameScreen;
