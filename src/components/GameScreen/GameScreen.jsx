import React from "react";

import Container from "./Container.jsx";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import MiddleContainer from "./MiddleContainer.jsx";

import GameGrid from "./GameGrid.jsx";
import GameStats from "./GameStats.jsx";
import Button from "./../Shared/Button.jsx";

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
        <Header text="Tic Tac Toe React" style={this.containerStyle} />
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
