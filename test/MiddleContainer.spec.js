// component test
import React from "react";
import ReactTestUtils from "react-addons-test-utils";

import MiddleContainer from "../src/components/GameScreen/MiddleContainer.js";

describe("Container component", () => {

  it("should exist", () => {
    MiddleContainer.should.exist;
  });

  it("should be react element", () => {
    ReactTestUtils.isElement(<MiddleContainer />).should.be.ok;
  });

  describe("rendering", () => {

    it("should display child elements in DOM somehow", () => {
      const children = <div>test</div>;

      const renderer = ReactTestUtils.createRenderer();
      renderer.render(<MiddleContainer>{children}</MiddleContainer>);
      const output = renderer.getRenderOutput();

      output.props.children
        .should.be.equal(children);
    });

  });

});
