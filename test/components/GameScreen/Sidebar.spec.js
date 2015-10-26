// component test
import React from "react";
import ReactTestUtils from "react-addons-test-utils";

import Sidebar from "../../../src/components/GameScreen/Sidebar.js";

describe("Sidebar component", () => {

  it("should exist", () => {
    Sidebar.should.exist;
  });

  it("should be react element", () => {
    ReactTestUtils.isElement(<Sidebar />).should.be.ok;
  });

  describe("rendering", () => {

    it("should display child elements in DOM somehow", () => {
      const children = <div>test</div>;

      const renderer = ReactTestUtils.createRenderer();
      renderer.render(<Sidebar>{children}</Sidebar>);
      const output = renderer.getRenderOutput();

      output.props.children
        .should.be.equal(children);
    });

  });

});
