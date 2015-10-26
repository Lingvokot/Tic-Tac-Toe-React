// component test
import jsdom from "mocha-jsdom";
import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-addons-test-utils";

import MiddleContainer from "../src/components/GameScreen/MiddleContainer.js";

describe("Container component", () => {

  jsdom();

  it("should exist", () => {
    MiddleContainer.should.exist;
  });

  it("should be react element", () => {
    ReactTestUtils.isElement(<MiddleContainer />).should.be.ok;
  });

  describe("rendering", () => {

    it("should display child elements in DOM somehow", () => {
      const container = document.createElement("div");
      ReactDOM.render(
        <MiddleContainer>
          <div>
            test
          </div>
        </MiddleContainer>, container);
      container.innerHTML.should.match(/<div.*?>test<\/div>/);
    });

  });

});
