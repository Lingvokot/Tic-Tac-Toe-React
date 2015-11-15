import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import app from "../reducers/App.js";

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

 var store = createStoreWithMiddleware(app);

 export default store;
