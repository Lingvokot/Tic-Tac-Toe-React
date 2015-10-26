// component test
import jsdom from "mocha-jsdom";
import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-addons-test-utils";

import Container from "../src/components/MenuScreen/Container.js";

describe("Container component for Menu Screen", () => {

  jsdom();

  it("should exist", () => {
    Container.should.exist;
  });

  it("should be react element", () => {
    ReactTestUtils.isElement(<Container />).should.be.ok;
  });

  describe("rendering", () => {

    it("should display child elements in DOM somehow", () => {
      const container = document.createElement("div");
      ReactDOM.render(<Container> <div>test</div> </Container>, container);
      container.innerHTML.should.match(/<div.*?>test<\/div>/);
    });

  });

});
