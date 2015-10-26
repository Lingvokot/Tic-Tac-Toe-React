// component test
import jsdom from "mocha-jsdom";
import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-addons-test-utils";

import Header from "../src/components/GameScreen/Header.js";

describe("Header component", () => {

  jsdom();

  it("should exist", () => {
    Header.should.exist;
  });

  it("should be react element", () => {
    ReactTestUtils.isElement(<Header />).should.be.ok;
  });

  describe("rendering", () => {

    it("should display 'text' prop in DOM somehow", () => {
      const container = document.createElement("div");
      ReactDOM.render(<Header text="TEST" />, container);
      container.innerHTML.should.contain("TEST");
    });

  });

});
