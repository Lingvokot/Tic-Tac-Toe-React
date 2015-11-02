import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./stores/Store.js";
import App from "./components/App.jsx";

import setCurrentScreenAction from "./actions/ScreenActions.js";
import { MENU_SCREEN, GAME_SCREEN } from "./actions/ScreenActions.js";
import changeGridAction from "./actions/GameActions.js";

// this function handles all button clicks (for now)
function buttonClickHandler(text) {
  switch(text) {
    case "Menu":
      store.dispatch(setCurrentScreenAction(MENU_SCREEN))
      break;
    default:
      store.dispatch(setCurrentScreenAction(GAME_SCREEN))
  }
}

function cellClickHandler(x, y) {
  store.dispatch(changeGridAction(x,y));
}

ReactDOM.render(
  <Provider store={store}>
    <App buttonClickHandler={buttonClickHandler}
        cellClickHandler={cellClickHandler}
    />
  </Provider>,
  document.getElementById("app"));
