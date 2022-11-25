import { Player } from "./Player";

export const checkHorizontalWin = (
  board: (Player | undefined)[][]
): boolean => {
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    for (let j = 0; j < row.length; j++) {
      if (
        row[j] &&
        row[j] === row[j + 1] &&
        row[j + 1] === row[j + 2] &&
        row[j + 2] === row[j + 3]
      ) {
        return true;
      }
    }
  }

  return false;
};

export const checkVerticalWin = (board: (Player | undefined)[][]): boolean => {
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    for (let j = 0; j < row.length; j++) {
      const column = board[j];
      if (
        column[i] &&
        column[i] === board[j + 1][i] &&
        column[i + 1] === board[j + 2][i] &&
        column[i + 2] === board[j + 3][i]
      ) {
        return true;
      }
    }
  }

  return false;
};

export const checkDiagonalWin = (board: (Player | undefined)[][]): boolean => {
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    for (let j = 0; j < row.length; j++) {
      if (
        board[i][j] &&
        board[i][j] === board[i + 1][j + 1] &&
        board[j][i] === board[i + 2][j + 2] &&
        board[j][i] === board[i + 3][j + 3]
      ) {
        return true;
      }
    }
  }

  return false;
};

export const checkAntiDiagonalWin = (
  board: (Player | undefined)[][]
): boolean => {
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    for (let j = 0; j < row.length; j++) {
      console.log("board[i][j] =>", board[i][j]);
      console.log("board[i + 1][j - 1] =>", board[i + 1][j - 1]);
      console.log("board[i + 1][j - 1] =>", board[i + 1][j - 2]);
      console.log("board[i + 1][j - 1] =>", board[i + 1][j - 3]);
      if (
        board[i][j] &&
        board[i][j] === board[i + 1][j - 1] &&
        board[i][j] === board[i + 2][j - 2] &&
        board[i][j] === board[i + 3][j - 3]
      ) {
        return true;
      }
    }
  }

  return false;
};
