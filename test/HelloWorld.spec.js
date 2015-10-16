// component test
import jsdom from "mocha-jsdom";
import assert from "assert";

import HelloWorld from "../src/components/HelloWorld.jsx";

describe("HelloWorld component", () => {

  jsdom();

  it("should exist", () => {
    assert.ok( !!HelloWorld );
  });
});
