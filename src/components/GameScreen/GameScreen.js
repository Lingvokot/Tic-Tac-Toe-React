import React from "react";

import Container from "./Container.js";
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import MiddleContainer from "./MiddleContainer.js";

import GameGrid from "./GameGrid.js";
import GameStats from "./GameStats.js";
import Button from "./../Shared/Button.js";

const GameScreen = React.createClass({
  containerStyle: {
    fontSize: "3rem",
    fontWeight: "bold",
    textAlign: "center",
    width: "60rem",
    margin: "auto"
  },

  render () {
    return (
      <Container>
        <Header style={this.containerStyle}
            text="Tic Tac Toe React"
        />
        <Sidebar />
        <MiddleContainer>
          <GameGrid />
        </MiddleContainer>
        <Sidebar>
          <GameStats />
          <Button text="Menu" />
        </Sidebar>
      </Container>
    );
  }
});

export default GameScreen;
