import { VS_HUMAN } from "../reducers/Game.js";
import computeMove from "../utils/AI.js";

// Game action types
export const APPLY_MOVE = "APPLY_MOVE";
export const RESET_GAME = "RESET_GAME";
export const SET_GAME_MODE = "SET_GAME_MODE";
export const START_NEXT_MATCH = "START_NEXT_MATCH";

const MOVE_TIMEOUT = 200;

// GRID_CHANGED action creator
export const applyMoveAction = function ({x, y}) {
  return {
    x: x,
    y: y,
    type: APPLY_MOVE
  };
};

export const computerMoveAction = function (state) {
  return applyMoveAction(computeMove(state));
};

export const applyComputerMoveAfterTimeout = function (state, timeout) {
  return dispatch => setTimeout(
      () => dispatch(computerMoveAction(state)),
      timeout
    );
};

export const resetGameAction = function () {
  return {
    type: RESET_GAME
  };
};

export const setGameModeAction = function (mode) {
  return {
    mode: mode,
    type: SET_GAME_MODE
  };
};

export const startNextMatchAction = function () {
  return {
    type: START_NEXT_MATCH
  }
};

const shouldHumanMove = function (state, {x, y}) {
  let cellAvaliable = state.gameGrid[x][y] === "",
      playingVersusHuman = state.gameMode === VS_HUMAN,
      nextTurnIsUpToX = state.currentTurn === "x",
      isNotComputerTurn = nextTurnIsUpToX !== state.AI.playingX,
      isHumanTurn = playingVersusHuman || isNotComputerTurn;

  return cellAvaliable && isHumanTurn;
};

const shouldComputerMove = function (state) {
  let playingVersusComputer = state.gameMode !== VS_HUMAN,
      gameIsNotOver = !state.gameOver,
      nextTurnIsUpToX = state.currentTurn === "x",
      isComputerTurn = nextTurnIsUpToX === state.AI.playingX;

  return playingVersusComputer && gameIsNotOver && isComputerTurn;
};

const gameTick = function (move) {
  return (dispatch, getState) => {
    let state = getState().game.toJS();
    if(move) {
      if(state.gameOver) {
        dispatch(startNextMatchAction());
        return;
      }
      if(shouldHumanMove(state, move)) {
        dispatch(applyMoveAction(move));
      }
      return;
    }
    if(shouldComputerMove(state)) {
      dispatch(applyComputerMoveAfterTimeout(state, MOVE_TIMEOUT));
    }
  }
};

export default gameTick;
