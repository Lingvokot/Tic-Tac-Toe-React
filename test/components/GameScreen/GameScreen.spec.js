// component test
import React from "react";
import ReactTestUtils from "react-addons-test-utils";
import jsdom from "mocha-jsdom";

import GameScreen from "src/components/GameScreen/GameScreen.js";
import Button from "src/components/Shared/Button.js";
import GameGrid, { GridCell } from "src/components/GameScreen/GameGrid.js";

import setCurrentScreenAction from "src/actions/ScreenActions.js";
import { MENU_SCREEN } from "src/actions/ScreenActions.js";
import { resetGameAction } from "src/actions/GameActions.js";

describe("GameScreen", () => {

  jsdom();

  it("should exist", () => {
    GameScreen.should.exist;
  });

  it("should be react element", () => {
    ReactTestUtils.isElement(<GameScreen />).should.be.ok;
  });

  describe("Buttons", () => {

    let actions = [],
        dispatch = (action) => actions.push(action);

    it("Button should dispatch proper actions on click", () => {
      const gameScreen = ReactTestUtils.renderIntoDocument(
        <GameScreen dispatch={dispatch}
            gameGrid={[["","",""],["","",""],["","",""]]}
            victoryStatistics={{x:0,y:0}}/>
      );
      var button = ReactTestUtils.findRenderedComponentWithType(
          gameScreen,
          Button
        );
      var node = ReactTestUtils
          .findRenderedDOMComponentWithTag(button, "button");

      ReactTestUtils.Simulate.click(node);

      actions[0].should.be.eql(setCurrentScreenAction(MENU_SCREEN));
      actions[1].should.be.eql(resetGameAction());
      actions = [];
    });

  });

  describe("Grid cells", () => {

    let actions = [],
        dispatch = (action) => actions.push(action);

    it("Should use cellClickHandler", () => {
      const gameScreen = ReactTestUtils.renderIntoDocument(
        <GameScreen dispatch={dispatch}
            gameGrid={[["","",""],["","",""],["","",""]]}
            victoryStatistics={{x:0,y:0}}/>
      );

      ReactTestUtils.scryRenderedComponentsWithType(
        gameScreen,
        GridCell
      ).forEach( gridCell => {
        var node = ReactTestUtils
            .findRenderedDOMComponentWithTag(gridCell, "div");
        ReactTestUtils.Simulate.click(node);
        actions[0].should.be.function;
        actions = [];
      });
    });

    it("Should use onUpdate", () => {
      const gameScreen = ReactTestUtils.renderIntoDocument(
        <GameScreen dispatch={dispatch}
            gameGrid={[["","",""],["","",""],["","",""]]}
            victoryStatistics={{x:0,y:0}}/>
      );

      var grid = ReactTestUtils.findRenderedComponentWithType(
        gameScreen,
        GameGrid
      );

      grid.forceUpdate();
      actions[0].should.be.function;
    });

  });

});
