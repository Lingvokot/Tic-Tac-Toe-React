// component test
import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-addons-test-utils";
import jsdom from "mocha-jsdom";

import GameGrid, { GridCell } from "src/components/GameScreen/GameGrid.js";
import { imageX, imageO } from "src/components/GameScreen/GameGrid.js";

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

  describe("GridCell component", () => {

    it("should render no image if prop cellValue is empty string", () => {
      const gridCell = ReactTestUtils.renderIntoDocument(
        <GridCell clickHandler={()=>1}
              cellValue=""
        />
      );
      let images = ReactTestUtils
          .scryRenderedDOMComponentsWithTag(gridCell, "img");
      images.should.be.eql([]);
    });

    it("should render 'x' image if prop cellValue is 'x' string", () => {
      const gridCell = ReactTestUtils.renderIntoDocument(
        <GridCell clickHandler={()=>1}
              cellValue="x"
        />
      );
      let image = ReactTestUtils
          .findRenderedDOMComponentWithTag(gridCell, "img");
      image.src.should.be.equal(imageX);
    });

    it("should render 'o' image if prop cellValue is 'o' string", () => {
      const gridCell = ReactTestUtils.renderIntoDocument(
        <GridCell clickHandler={()=>1}
              cellValue="o"
        />
      );
      let image = ReactTestUtils
          .findRenderedDOMComponentWithTag(gridCell, "img");
      image.src.should.be.equal(imageO);
    });

  });

});
