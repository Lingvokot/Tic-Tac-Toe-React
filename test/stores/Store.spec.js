import store from "src/stores/Store.js";
import app from "src/reducers/App.js";

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

  it("should use app reducer", () => {
    store.dispatch({type: "bla-bla-bla"});
    var storeState = store.getState();
    var defaultState = app(undefined, {type: "bla-bla-bla"});
    storeState.should.be.eql(defaultState);
  })

});
