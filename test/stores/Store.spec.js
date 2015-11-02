import store from "../../src/stores/Store.js";

describe("store", () => {

  it("should exist", () => {
    store.should.exist;
  });

  it("should have all API methods", () => {
    store.dispatch.should.be.a.function;
    store.getState.should.be.a.function;
    store.replaceReducer.should.be.a.function;
    store.subscribe.should.be.a.function;
  });

});
