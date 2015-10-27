// component test
import React from "react";
import ReactTestUtils from "react-addons-test-utils";

import GameGrid from "../../../src/components/GameScreen/GameGrid.js";

describe("GameGrid component", () => {

  it("should exist", () => {
    GameGrid.should.exist;
  });

  it("should be react element", () => {
    ReactTestUtils.isElement(<GameGrid />).should.be.ok;
  });

});
