// component test
import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-addons-test-utils";
import jsdom from "mocha-jsdom";

import GameGrid from "src/components/GameScreen/GameGrid.js";

describe("GameGrid component", () => {

  jsdom();

  it("should exist", () => {
    GameGrid.should.exist;
  });

  it("should be react element", () => {
    ReactTestUtils.isElement(<GameGrid />).should.be.ok;
  });

  it("should call click handler passed through props on click event", () => {
    var wasCalled = false;
    const grid = ReactTestUtils.renderIntoDocument(
      <GameGrid cellClickHandler={() => wasCalled = true}
          cellValues={[["","",""],["","",""],["","",""]]}
      />
    );
    var node = ReactDOM.findDOMNode(grid);
    ReactTestUtils.Simulate.click(node.children[1]);
    wasCalled.should.equal(true);
  });

  describe("Grid tests", () => {

    it("should generate cells depending on cellValues prop", () => {
      var grid = [["","",""],["","",""],["","",""]];
      const renderer = ReactTestUtils.createRenderer();
      renderer.render(
        <GameGrid cellClickHandler={() => undefined}
            cellValues={grid}
        />
      );
      const gridNode = renderer.getRenderOutput();
      gridNode.props.children.length.should.be.equal(grid.length*grid.length);
    });

    it("should generate cells depending on cellValues prop", () => {
      const renderer = ReactTestUtils.createRenderer();
      renderer.render(
        <GameGrid cellClickHandler={() => undefined}
            cellValues={[[""]]}
        />
      );
      const gridNode = renderer.getRenderOutput();
      gridNode.props.children.length.should.be.equal(1);
    });

    it("should pass cell values to grid cells", () => {
      var grid = [["x","x","x"],["x","x","x"],["x","x","x"]];
      const renderer = ReactTestUtils.createRenderer();
      renderer.render(
        <GameGrid cellClickHandler={() => undefined}
            cellValues={grid}
        />
      );

      renderer.getRenderOutput().props.children.every((node) =>
          node.props.cellValue.should.be.equal("x")
      );

    });

    it("should pass cell values to grid cells", () => {
      var grid = [["o","o","o"],["o","o","o"],["o","o","o"]];
      const renderer = ReactTestUtils.createRenderer();
      renderer.render(
        <GameGrid cellClickHandler={() => undefined}
            cellValues={grid}
        />
      );
      renderer.getRenderOutput().props.children.every((node) =>
          node.props.cellValue.should.be.equal("o")
      );

    });

  });

});
