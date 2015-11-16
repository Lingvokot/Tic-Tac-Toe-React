import React from "react";
import ReactTestUtils from "react-addons-test-utils";
import jsdom from "mocha-jsdom";

import MenuScreen from "src/components/MenuScreen/MenuScreen.js";
import Button from "src/components/Shared/Button.js";

import setCurrentScreenAction from "src/actions/ScreenActions.js";
import { GAME_SCREEN } from "src/actions/ScreenActions.js";

import {setGameModeAction} from "src/actions/GameActions.js";
import {VS_HUMAN, EASY, MEDIUM, HARD} from "src/reducers/Game.js";

describe("MenuScreen", () => {

  jsdom();

  it("should exist", () => {
    MenuScreen.should.exist;
  });

  it("should be react element", () => {
    ReactTestUtils.isElement(<MenuScreen />).should.be.ok;
  });

  describe("Buttons", () => {

    let actions = [],
        dispatch = (action) => actions.push(action),
        gameModes = [VS_HUMAN, EASY, MEDIUM, HARD];

    it("Buttons should dispatch proper actions on click", () => {
      const menuScreen = ReactTestUtils.renderIntoDocument(
        <MenuScreen dispatch={dispatch} />
      );
      ReactTestUtils.scryRenderedComponentsWithType(
          menuScreen,
          Button
        ).forEach((button, i) => {
          let node = ReactTestUtils
              .findRenderedDOMComponentWithTag(button, "button");

          ReactTestUtils.Simulate.click(node);

          actions[0].should.be.eql(setCurrentScreenAction(GAME_SCREEN));
          actions[1].should.be.eql(setGameModeAction(gameModes[i]));
          actions = [];
        });
    });

  });

});
