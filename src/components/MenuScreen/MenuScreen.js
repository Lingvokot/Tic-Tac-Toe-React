import React from "react";

import Container from "./Container.js";
import Button from "./../Shared/Button.js";

const GameScreen = React.createClass({
  headerStyle: {
    textAlign: "center",
    color: "white"
  },

  render () {
    return (
      <Container>
        <h1 style={this.headerStyle}>Tic Tac Toe React</h1>
        <Button  text={"Play with Human"}
            useWrapper/>
        <h2 style={this.headerStyle}>Play with computer</h2>
        <Button useWrapper text="EASY" />
        <Button useWrapper text="MEDIUM" />
        <Button useWrapper text="HARD" />
      </Container>
    );
  }
});

export default GameScreen;
