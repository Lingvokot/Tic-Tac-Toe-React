import { checkBoard } from "../reducers/Game.js";

const difficultyModificator = {
  EASY: 0.8,
  MEDIUM: 0.5,
  HARD: 0.2
}

const computeMove = function (state) {
  let move;
  if(Math.random() < difficultyModificator[state.gameMode]) {
    // make random move
    move = getRandomElement(getAvaliableMoves(state.gameGrid));
  }
  else {
    //make best move possible
    move = minimax(state, 0);
  }
  return move
}

const minimax = function (game, depth) {
  var scores = [],
      moves = [];
  let winner = checkBoard(game.gameGrid)
  if(winner !== "") {
    return score (winner, depth);
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
  var newGameState = {
    gameGrid: game.gameGrid.map(arr => arr.slice()),
    currentTurn: game.currentTurn
  };
  newGameState.gameGrid[x][y] = newGameState.currentTurn;
  newGameState.currentTurn = newGameState.currentTurn === "x" ? "o" : "x";
  return newGameState;
};

export default computeMove;
