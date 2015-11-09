import React from "react";
import ReactTestUtils from "react-addons-test-utils";

import GameStats from "src/components/GameScreen/GameStats.js";

describe("GameStats component", () => {

  it("should exist", () => {
    GameStats.should.exist;
  });

  it("should be react element", () => {
    ReactTestUtils.isElement(<GameStats />).should.be.ok;
  });

  describe("rendering", () => {

    it("should display statistics in DOM", () => {
      const statistics = {
        x: 5,
        o: 123456
      };
      const renderer = ReactTestUtils.createRenderer();
      renderer.render(<GameStats victoryStatistics={statistics} />);
      const output = renderer.getRenderOutput();

      output.props.children[1]
            .props.children[1]
            .props.children.should.be.equal(statistics.x);
      output.props.children[2]
            .props.children[1]
            .props.children.should.be.equal(statistics.o);
    });

  });

});
