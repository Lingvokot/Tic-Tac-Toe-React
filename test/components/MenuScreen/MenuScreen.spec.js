import React from "react";
import ReactTestUtils from "react-addons-test-utils";

import MenuScreen from "src/components/MenuScreen/MenuScreen.js";

describe("MenuScreen", () => {

  it("should exist", () => {
    MenuScreen.should.exist;
  });

  it("should be react element", () => {
    ReactTestUtils.isElement(<MenuScreen />).should.be.ok;
  });

});
