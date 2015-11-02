import { GRID_CHANGED } from "../actions/GameActions.js";
import { SET_CURRENT_SCREEN } from "../actions/ScreenActions.js";

export const initialGameState = function() {
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
};


const game = function (state = initialGameState(), action) {
  switch (action.type) {
    case GRID_CHANGED:
      if(state.gameGrid[action.x][action.y] !== "" || state.gameOver) {
        return state;
      }
      return processTurn(state, action.x, action.y);
    case SET_CURRENT_SCREEN:
      return initialGameState();
    default:
      return state;
  }
}

const processTurn = function (state, x, y) {
  var newState = Object.assign({}, state, {
    gameGrid: state.gameGrid.slice()});

  newState.gameGrid[x][y] = newState.currentTurn;
  newState.currentTurn = newState.currentTurn === "x" ? "o": "x";

  var res = checkBoard(newState.gameGrid);
  if(res) {
    //newState.gameOver = true;
    newState = initialGameState();
    newState.victoryStatistics = {
      x: state.victoryStatistics.x,
      o: state.victoryStatistics.o
    };
    if(res === "tie") return newState;
    newState.victoryStatistics[res]++;
  }
  return newState
}

// check whether someone won or not
const checkBoard = function (board) {
  var result;

  //check rows
  result = checkRows(board);
  if(result) return result;

  // check columns
  result = checkColumns(board);
  if(result) return result;

  // check diagonals
  result = checkDiagonals(board);
  if(result) return result;

  // check if there's still empty tiles
  if(isBoardFull(board)) return "tie";

  return "";
}

const checkRows = function (b) {
  for (let i = 0; i < b.length; i++) {
    if(b[i][0] === b[i][1] && b[i][1] === b[i][2] && b[i][0] !== "")
      return b[i][0];
  }
}

const checkColumns = function (b) {
  for (let i = 0; i < b.length; i++) {
    if(b[0][i] === b[1][i] && b[1][i] === b[2][i] && b[0][i] !== "")
      return b[0][i];
  }
}

const checkDiagonals = function (b) {
  if((b[0][0] === b[1][1] && b[1][1] === b[2][2] ||
      b[0][2] === b[1][1] && b[1][1] === b[2][0]) &&
      b[1][1] !== "") {
    return b[1][1];
  }
}

const isBoardFull = function (b) {
  return !b.some(row => row.some(elem => elem === ""));
}

export default game;
