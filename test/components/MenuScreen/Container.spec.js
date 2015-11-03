// component test
import React from "react";
import ReactTestUtils from "react-addons-test-utils";

import Container from "src/components/MenuScreen/Container.js";

describe("Container component for Menu Screen", () => {

  it("should exist", () => {
    Container.should.exist;
  });

  it("should be react element", () => {
    ReactTestUtils.isElement(<Container />).should.be.ok;
  });

  describe("rendering", () => {

    it("should display child elements in DOM somehow", () => {
      const children = <div>test</div>;

      const renderer = ReactTestUtils.createRenderer();
      renderer.render(<Container>{children}</Container>);
      const output = renderer.getRenderOutput();

      output.props.children
        .should.be.equal(children);
    });

  });

});
