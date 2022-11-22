import { Player } from "./Player";

export const checkHorizontalWin = (
  board: (Player | undefined)[][]
): boolean => {
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    for (let j = 0; j < row.length; j++) {
      if (
        board[i][j] &&
        board[i][j] === board[i][j + 1] &&
        board[i][j + 1] === board[i][j + 2] &&
        board[i][j + 2] === board[i][j + 3]
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
      if (
        board[j][i] &&
        board[j][i] === board[j + 1][i] &&
        board[j][i + 1] === board[j + 2][i] &&
        board[j][i + 2] === board[j + 3][i]
      ) {
        return true;
      }
    }
  }

  return false;
};
