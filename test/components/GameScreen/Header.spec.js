// component test
import React from "react";
import ReactTestUtils from "react-addons-test-utils";

import Header from "../../../src/components/GameScreen/Header.js";

describe("Header component", () => {

  it("should exist", () => {
    Header.should.exist;
  });

  it("should be react element", () => {
    ReactTestUtils.isElement(<Header />).should.be.ok;
  });

  describe("rendering", () => {

    it("should display 'text' prop in DOM somehow", () => {
      const renderer = ReactTestUtils.createRenderer();
      renderer.render(<Header text="TEST" />);
      const header = renderer.getRenderOutput();

      header.props.children
        .should.be.equal("TEST");
    });

  });

});
