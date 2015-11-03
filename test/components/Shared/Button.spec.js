// component test
import React from "react";
import ReactTestUtils from "react-addons-test-utils";

import Button from "src/components/Shared/Button.js";

describe("Button component", () => {

  it("should exist", () => {
    Button.should.exist;
  });

  it("should be react element", () => {
    ReactTestUtils.isElement(<Button />).should.be.ok;
  });

  describe("rendering", () => {

    it("contain passed text as only child", () => {
      const renderer = ReactTestUtils.createRenderer();
      renderer.render(<Button text="TEST" />);
      const button = renderer.getRenderOutput();

      button.props.children
        .should.be.equal("TEST");
    });

    it("should render Button as noncomposite component", () => {
      const renderer = ReactTestUtils.createRenderer();
      renderer.render(<Button />);
      const output = renderer.getRenderOutput();

      ReactTestUtils
        .isCompositeComponent(output)
          .should.be.not.ok;
    });

    it("should have wrapper if useWrapper is specified", () => {
      const renderer = ReactTestUtils.createRenderer();
      renderer.render(<Button useWrapper />);
      const output = renderer.getRenderOutput();

      ReactTestUtils
        .isCompositeComponentWithType(output, Button)
          .should.be.not.ok;
    });

  });

});
