// checks whether someone win or not
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
  let cellIsNotEmpty,
      someoneWon;

  const allElementsInRowAreSame = row => {
    let firstElement = row[0];
    return row.every(element => element === firstElement);
  }

  for (let i = 0; i < b.length; i++) {
    cellIsNotEmpty = !isCellEmpty(b[i][0]);
    someoneWon = cellIsNotEmpty && allElementsInRowAreSame(b[i]);
    if(someoneWon)
      return b[i][0];
  }
};


const checkColumns = function (b) {
  let cellIsNotEmpty,
      someoneWon;

  const allElementsInColumnAreSame = (board, column) => {
    for(let i = 1; i < board.length; i++) {
      if(board[i][column] !== board[i-1][column]) {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i < b.length; i++) {
    cellIsNotEmpty = !isCellEmpty(b[0][i]);
    someoneWon = allElementsInColumnAreSame(b, i) && cellIsNotEmpty;
    if(someoneWon)
      return b[0][i];
  }
}

const checkDiagonals = function (b) {
  let cellIsNotEmpty = !isCellEmpty(b[1][1]),
      someoneWon;

  const allElemenstInMainDiagonalAreSame = board => {
    for(let i = 1; i < board.length; i++) {
      if(board[i][i] !== board[i-1][i-1]) {
        return false;
      }
    }
    return true;
  };

  const allElemenstInMinorDiagonalAreSame = board => {
    for(let i = 1; i < board.length; i++) {
      if(board[i][board.length-i-1] !== board[i-1][board.length-i]) {
        return false;
      }
    }
    return true;
  };

  const oneOfDiagonalsHaveAllSameElements = (board) => {
    return allElemenstInMinorDiagonalAreSame(board) ||
           allElemenstInMainDiagonalAreSame(board);
  }

  someoneWon = oneOfDiagonalsHaveAllSameElements(b) && cellIsNotEmpty;

  if(someoneWon) {
    return b[1][1];
  }
}

const isCellEmpty = function (cell) {
  return cell === "";
}

const isBoardFull = function (b) {
  return !b.some(
    row => row.some(elem => elem === "")
  );
}

export default checkBoard;
