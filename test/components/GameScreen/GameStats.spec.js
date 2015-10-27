import React from "react";
import ReactTestUtils from "react-addons-test-utils";

import GameStats from "../../../src/components/GameScreen/GameStats.js";

describe("GameStats component", () => {

  it("should exist", () => {
    GameStats.should.exist;
  });

  it("should be react element", () => {
    ReactTestUtils.isElement(<GameStats />).should.be.ok;
  });

});
