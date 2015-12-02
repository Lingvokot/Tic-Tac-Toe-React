import { APPLY_MOVE, RESET_GAME,
  SET_GAME_MODE, START_NEXT_MATCH } from "../actions/GameActions.js";
import Immutable from "immutable";
import checkBoard from "../utils/CheckBoard.js";

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
      return applyMove(state, action);
    case START_NEXT_MATCH:
      return startNextMatch(state);
    case SET_GAME_MODE:
      return setGameMode(state, action);
    case RESET_GAME:
      return initialGameState();
    default:
      return state;
  }
};

const setGameMode = function (state, {mode}) {
  return state.set("gameMode", mode);
}

const applyMove = function (state, {x, y}) {
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

export default game;
