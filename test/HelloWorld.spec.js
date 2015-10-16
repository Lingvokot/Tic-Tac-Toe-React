// component test
import jsdom from "mocha-jsdom";
import assert from "assert";
import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-addons-test-utils";

import HelloWorld from "../src/components/HelloWorld.jsx";

describe("HelloWorld component", () => {

  jsdom();

  it("should exist", () => {
    assert.ok( !!HelloWorld );
  });

  it("should be react element", () => {
    assert.ok( ReactTestUtils.isElement(<HelloWorld />),
      "is not a react element" );
  });

  describe("rendering", () => {

    it("should display 'text' prop in DOM somehow", () => {
      const container = document.createElement("div");
      ReactDOM.render(<HelloWorld text="TEST" />, container);
      assert.ok( /TEST/.test(container.innerHTML), "It don't displays 'text' prop in DOM");
    });

  });

});
