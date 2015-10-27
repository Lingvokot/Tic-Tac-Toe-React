// component test
import React from "react";
import ReactTestUtils from "react-addons-test-utils";

import GameScreen from "../../../src/components/GameScreen/GameScreen.js";

describe("GameScreen", () => {

  it("should exist", () => {
    GameScreen.should.exist;
  });

  it("should be react element", () => {
    ReactTestUtils.isElement(<GameScreen />).should.be.ok;
  });

});
