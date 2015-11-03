// component test
import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-addons-test-utils";
import jsdom from "mocha-jsdom";

import Button from "src/components/Shared/Button.js";

describe("Button component", () => {

  jsdom();

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

      output.type.displayName.should.be.equal("ButtonWrapper");
      output.props.children.type.should.be.equal("button");
    });

    it("should call click handler passed through props on click event", () => {
      var wasCalled = false;
      const button = ReactTestUtils.renderIntoDocument(
        <Button onClick={() => wasCalled = true}/>
      );
      var node = ReactDOM.findDOMNode(button);
      ReactTestUtils.Simulate.click(node);
      wasCalled.should.equal(true);
    })

    it("should call click handler, with wrapper too", () => {
      var wasCalled = false;
      const button = ReactTestUtils.renderIntoDocument(
        <Button onClick={() => wasCalled = true}
            useWrapper
        />
      );
      var node = ReactTestUtils
          .findRenderedDOMComponentWithTag(button, "button");

      ReactTestUtils.Simulate.click(node);
      wasCalled.should.equal(true);
    })

  });

});
