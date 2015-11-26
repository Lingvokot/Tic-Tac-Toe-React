import { APPLY_MOVE, RESET_GAME,
  SET_GAME_MODE, START_NEXT_MATCH } from "../actions/GameActions.js";
import Immutable from "immutable";

export const VS_HUMAN = "VS_HUMAN";
export const EASY = "EASY";
export const MEDIUM = "MEDIUM";
export const HARD = "HARD";

export const initialGameState = function() {
  return Immutable.fromJS({
    gameGrid: [["","",""],
               ["","",""],
               ["","",""]],
    currentTurn: "x",
    victoryStatistics: {
      x: 0,
      o: 0
    },
    gameMode: -1,
    AI: {
      playingX: false
    },
    gameOver: false
  });
};

const game = function (state = initialGameState(), action) {
  switch (action.type) {
    case APPLY_MOVE:
      return applyMove(state, action.x, action.y);
    case START_NEXT_MATCH:
      return startNextMatch(state);
    case SET_GAME_MODE:
      return setGameMode(state, action.mode);
    case RESET_GAME:
      return initialGameState();
    default:
      return state;
  }
};

const setGameMode = function (state, mode) {
  return state.set("gameMode", mode);
}

const applyMove = function (state, x, y) {
  var newState = state.setIn(
    ["gameGrid", x, y],
    state.get("currentTurn")
  );
  newState = newState.set(
    "currentTurn",
    state.get("currentTurn") === "x" ? "o": "x"
  );
  var winner = checkBoard(newState.get("gameGrid").toJS());
  if(winner) {
    newState = newState.set("gameOver", true);
    if(winner === "tie") {
      return newState;
    }
    return newState.updateIn(
      ["victoryStatistics", winner],
      victories => victories+1
    );
  }
  return newState;
};

const startNextMatch = function (state) {
  return initialGameState().merge({
    gameMode: state.get("gameMode"),
    victoryStatistics: state.get("victoryStatistics"),
    AI: {
      playingX: !state.getIn(["AI","playingX"])
    }
  });
}

// check whether someone won or not
export const checkBoard = function (board) {
  var winner;

  //check rows
  winner = checkRows(board);
  if(winner) {
    return winner;
  }

  // check columns
  winner = checkColumns(board);
  if(winner) {
    return winner;
  }

  // check diagonals
  winner = checkDiagonals(board);
  if(winner) {
    return winner;
  }

  // check if there's still empty tiles
  if(isBoardFull(board)) {
    return "tie";
  }

  return "";
};

const checkRows = function (b) {
  for (let i = 0; i < b.length; i++) {
    if(b[i][0] === b[i][1] && b[i][1] === b[i][2] && b[i][0] !== "")
      return b[i][0];
  }
};

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
  return !b.some(
    row => row.some(elem => elem === "")
  );
}

export default game;
