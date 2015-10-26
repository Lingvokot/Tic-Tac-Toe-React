// component test
import jsdom from "mocha-jsdom";
import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-addons-test-utils";

import Button from "../src/components/Shared/Button.js";

describe("Button component", () => {

  jsdom();

  it("should exist", () => {
    Button.should.exist;
  });

  it("should be react element", () => {
    ReactTestUtils.isElement(<Button />).should.be.ok;
  });

  describe("rendering", () => {

    it("should display 'text' prop in DOM somehow", () => {
      const container = document.createElement("div");
      ReactDOM.render(<Button text="TEST" />, container);
      container.innerHTML.should.contain("TEST");
    });

    it("should have wrapper if useWrapper is specified", () => {
      const container = document.createElement("div");
      ReactDOM.render(<Button useWrapper />, container);
      container.innerHTML.should.match(/<div.*?><button.*?><\/button><\/div>/);
    });

  });

});
