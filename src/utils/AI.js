import checkBoard from "./CheckBoard.js";

const difficultyModificator = {
  EASY: 0.8,
  MEDIUM: 0.5,
  HARD: 0.2
}

const computeMove = function (state) {
  let move,
      shouldMakeRandomMove;
  shouldMakeRandomMove = Math.random() < difficultyModificator[state.gameMode];
  if(shouldMakeRandomMove) {
    // make random move
    let moves = getAvaliableMoves(state.gameGrid);
    move = getRandomElement(moves);
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

  let winner = checkBoard(game.gameGrid);
  if(winner !== "") {
    return score (winner, depth);
  }

  moves = getAvaliableMoves(game.gameGrid);
  let possibleStates = moves.map(move => simulateMove(game, move));
  scores = possibleStates.map(state => minimax(state, depth+1));

  if(depth === 0) {
    let maxElementIndex = getMaxElementIndex(scores);
    return moves[maxElementIndex];
  }
  if(depth%2 === 0) {
    return getMaxElement(scores);
  }
  return getMinElement(scores);
};

function getMaxElementIndex(arr) {
  return  arr.indexOf(getMaxElement(arr));
}

function getMaxElement(arr) {
  return Math.max(...arr);
}

function getMinElement(arr) {
  return Math.min(...arr);
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
