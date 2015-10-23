import React from "react";

import Container from "./Container.jsx";
import Button from "./../Shared/Button.jsx";

const GameScreen = React.createClass({
  headerStyle: {
    textAlign: "center",
    color: "white"
  },

  render () {
    return (
      <Container>
        <h1 style={this.headerStyle}>Tic Tac Toe React</h1>
        <Button useWrapper={true} text="Play with Human" />
        <h2 style={this.headerStyle}>Play with computer</h2>
        <Button useWrapper={true} text="EASY" />
        <Button useWrapper={true} text="MEDIUM" />
        <Button useWrapper={true} text="HARD" />
      </Container>
    );
  }
});

export default GameScreen;
