// Game action types
export const PLAYER_MOVE = "PLAYER_MOVE";
export const COMPUTER_MOVE = "COMPUTER_MOVE";
export const RESET_GAME = "RESET_GAME";
export const SET_GAME_MODE = "SET_GAME_MODE";

// GRID_CHANGED action creator
export const playerMoveAction = function (x, y) {
  return {
    x: x,
    y: y,
    type: PLAYER_MOVE
  };
};

export const computerMoveAction = function () {
  return {
    type: COMPUTER_MOVE
  };
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
