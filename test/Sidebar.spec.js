// component test
import jsdom from "mocha-jsdom";
import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-addons-test-utils";

import Sidebar from "../src/components/GameScreen/Sidebar.js";

describe("Sidebar component", () => {

  jsdom();

  it("should exist", () => {
    Sidebar.should.exist;
  });

  it("should be react element", () => {
    ReactTestUtils.isElement(<Sidebar />).should.be.ok;
  });

  describe("rendering", () => {

    it("should display child elements in DOM somehow", () => {
      const container = document.createElement("div");
      ReactDOM.render(<Sidebar> <div>test</div> </Sidebar>, container);
      container.innerHTML.should.match(/<div.*?>test<\/div>/);
    });

  });

});
