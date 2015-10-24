// component test
import jsdom from "mocha-jsdom";
import assert from "assert";
import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-addons-test-utils";

import HelloWorld from "../src/components/HelloWorld.js";

describe("HelloWorld component", () => {

  jsdom();

  it("should exist", () => {
    expect(HelloWorld).to.exist;
  });

  it("should be react element", () => {
    ReactTestUtils.isElement(<HelloWorld />).should.be.ok;
  });

  describe("rendering", () => {

    it("should display 'text' prop in DOM somehow", () => {
      const container = document.createElement("div");
      ReactDOM.render(<HelloWorld text="TEST" />, container);
      container.innerHTML.should.contain("TEST");
    });

  });

});
