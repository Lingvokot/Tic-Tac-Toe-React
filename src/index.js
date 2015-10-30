import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import App from "./components/App.jsx";

import {MENU_SCREEN, GAME_SCREEN} from "./components/App.jsx";

const SET_CURRENT_SCREEN = "SET_CURRENT_SCREEN";
const GRID_CHANGED = "GRID_CHANGED";

const initialGameState = function() {
  return {
    gameGrid: [["","",""],
               ["","",""],
               ["","",""]],
    currentTurn: "x",
    victoryStatistics: {
      x: 0,
      o: 0
    },
    gameOver: false
  };
}

// reducers
function screen(state = MENU_SCREEN, action) {
  switch (action.type) {
    case SET_CURRENT_SCREEN:
      return action.screen;
    default:
      return state;
  }
}

function game(state = initialGameState(), action) {
  switch (action.type) {
    case GRID_CHANGED:
      if(state.gameGrid[action.x][action.y] !== "" || state.gameOver) {
        return state;
      }

      var newState = Object.assign({}, state,
          {gameGrid: state.gameGrid.slice()});

      newState.gameGrid[action.x][action.y] = newState.currentTurn;
      newState.currentTurn = newState.currentTurn === "x" ? "o": "x";

      var res = checkBoard(newState.gameGrid);
      if(res !== "") {
        //newState.gameOver = true;
        newState = initialGameState();
        newState.victoryStatistics = state.victoryStatistics;
        if(res === "tie") return newState;
        newState.victoryStatistics[res]++;
      }

      return newState;

    case SET_CURRENT_SCREEN:
      return initialGameState();
    default:
      return state;
  }
}

var app = combineReducers({
        screen,
        game
      });

var store = createStore(app);


// SET_CURRENT_SCREEN action creator
function setScreenAction(screen) {
  return {screen: screen, type: SET_CURRENT_SCREEN};
}

// check whether someone won or not
function checkBoard(b) {
  //check rows
  for (let i = 0; i < b.length; i++) {
    if(b[i][0] === b[i][1] && b[i][1] === b[i][2] && b[i][0] !== "")
      return b[i][0];
  }
  // check columns
  for (let i = 0; i < b.length; i++) {
    if(b[0][i] === b[1][i] && b[1][i] === b[2][i] && b[0][i] !== "")
      return b[0][i];
  }
  // check diagonals
  if((b[0][0] === b[1][1] && b[1][1] === b[2][2] ||
      b[0][2] === b[1][1] && b[1][1] === b[2][0]) &&
      b[1][1] !== "") {
    return b[1][1];
  }
  // check if there's still empty tiles
  for(let i = 0; i < b.length; i++) {
    for(let j = 0; j < b.length; j++) {
      if(b[i][j] === "") return "";
    }
  }
  return "tie";
}
// this function handles all button clicks (for now)
function buttonClickHandler(text) {
  switch(text) {
    case "Menu":
      store.dispatch(setScreenAction(MENU_SCREEN))
      break;
    default:
      store.dispatch(setScreenAction(GAME_SCREEN))
  }
}

function cellClickHandler(x, y) {
  store.dispatch({x: x, y: y, type: GRID_CHANGED});
}

ReactDOM.render(
  <Provider store={store}>
    <App buttonClickHandler={buttonClickHandler}
        cellClickHandler={cellClickHandler}
    />
  </Provider>,
  document.getElementById("app"));
