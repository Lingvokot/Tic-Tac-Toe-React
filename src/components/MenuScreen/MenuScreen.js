import React from "react";

import Container from "./Container.js";
import Button from "./../Shared/Button.js";

const screenTitle = "Tic Tac Toe React";

const MenuScreen = React.createClass({
  PropTypes: {
    buttonClickHandler: React.PropTypes.func.isRequired
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
        <Button buttonClickHandler={this.props.buttonClickHandler}
            text="Play with Human"
            useWrapper
        />
        <h2 style={this.headerStyle}>
          {"Play with computer"}
        </h2>
        <Button buttonClickHandler={this.props.buttonClickHandler}
            text="EASY"
            useWrapper
        />
        <Button buttonClickHandler={this.props.buttonClickHandler}
            text="MEDIUM"
            useWrapper
        />
        <Button buttonClickHandler={this.props.buttonClickHandler} 
            text="HARD"
            useWrapper
        />
      </Container>
    );
  }
});

export default MenuScreen;
