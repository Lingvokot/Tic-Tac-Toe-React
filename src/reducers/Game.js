import { PLAYER_MOVE, COMPUTER_MOVE,
         RESET_GAME, SET_GAME_MODE } from "../actions/GameActions.js";

export const VS_HUMAN = "VS_HUMAN";
export const EASY = "EASY";
export const MEDIUM = "MEDIUM";
export const HARD = "HARD";

export const difficultyModificator = {
  EASY: 0.8,
  MEDIUM: 0.5,
  HARD: 0.2
}

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
    gameMode: -1,
    AI: {
      playingX: false
    },
    gameOver: false
  };
};

const game = function (state = initialGameState(), action) {
  switch (action.type) {
    case PLAYER_MOVE:
      if(state.gameOver) {
        return startNewGame(state.victoryStatistics);
      }
      if(state.gameGrid[action.x][action.y] !== "") {
        return state;
      }
      return applyMove(state, action.x, action.y);
    case COMPUTER_MOVE:
      if(state.gameMode === VS_HUMAN || state.gameOver) {
        return state;
      }
      let move;
      if(Math.random() < difficultyModificator[state.gameMode]) {
        // make random move
        move = getRandomElement(getAvaliableMoves(state.gameGrid))
      }
      else {
        //make best move possible
        move = minimax(state, 0);
      }
      return applyMove(state, move.x, move.y);
    case SET_GAME_MODE:
      return setGameMode(state, action.mode);
    case RESET_GAME:
      return initialGameState();
    default:
      return state;
  }
};

const setGameMode = function (state, mode) {
  var newState = Object.assign({}, state, {
    gameMode: mode
  });
  newState.AI.isOn = mode !== VS_HUMAN;
  return newState;
}

const applyMove = function (state, x, y) {

  var newState = Object.assign({}, state, {
    gameGrid: state.gameGrid.slice()
  });
  newState.gameGrid[x][y] = newState.currentTurn;
  newState.currentTurn = newState.currentTurn === "x" ? "o": "x";

  var winner = checkBoard(newState.gameGrid);
  if(winner) {
    newState.gameOver = true;
    newState.victoryStatistics = {
      x: state.victoryStatistics.x,
      o: state.victoryStatistics.o
    };
    if(winner === "tie") {
      return newState;
    }
    newState.victoryStatistics[winner]++;
  }
  return newState;
};

const startNewGame = function (victoryStatistics) {
  return Object.assign({}, initialGameState(), {
    victoryStatistics: victoryStatistics
  });
}

// check whether someone won or not
const checkBoard = function (board) {
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
  return !b.some(row => row.some(elem => elem === ""));
}

const MAX_SCORE = 10;

const score = function (winner, depth) {
  if(winner === "tie") {
    return 0;
  }
  if(depth%2 === 1) {
    return MAX_SCORE - depth;
  }
  else {
    return depth - MAX_SCORE;
  }
};

const minimax = function (game, depth) {
  var scores = [],
      moves = [];
  if(checkBoard(game.gameGrid) !== "") {
    return score (game, depth);
  }

  moves = getAvaliableMoves(game.gameGrid);
  scores = moves.map((move) => minimax(simulateMove(game, move), depth+1));

  if(depth === 0) {
    return moves[scores.indexOf(Math.max.apply(null, scores))];
  }
  if(depth%2 === 0) {
    return Math.max.apply(null, scores);
  }
  return Math.min.apply(null, scores);
};

const getAvaliableMoves = function(gameGrid) {
  var moves = [];
  for(let i = 0; i < gameGrid.length; i++) {
    for(let j = 0; j < gameGrid[i].length; j++) {
       if(gameGrid[i][j] === "") {
         moves.push({x: i, y: j});
       }
     }
  }
  return moves;
};

const getRandomElement = function (array) {
  return array[Math.floor(Math.random()*array.length)];
};

const simulateMove = function(game, {x, y}) {
  var newGameState;
  if(game.gameGrid[x][y] !== "") {
    throw {type: "WTF?"};
  }
  newGameState = JSON.parse(JSON.stringify(game));
  newGameState.gameGrid[x][y] = newGameState.currentTurn;
  newGameState.currentTurn = newGameState.currentTurn === "x" ? "o" : "x";
  return newGameState;
};

export default game;
