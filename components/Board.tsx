import { useEffect, useState } from "react";
import { Player } from "../utils/Player";
import { Tile } from "./Tile";

const BOARD_COLS = 7;
const BOARD_ROWS = 6;

export const Board: React.FC<{
  isGameOver: boolean;
  currentPlayer: Player;
}> = ({ isGameOver, currentPlayer }) => {
  const [board, setBoard] = useState<(Player | undefined)[][]>([]);

  useEffect(() => {
    setupBoard();
  }, []);

  const setupBoard = () => {
    const baseBoard = Array.from(Array(BOARD_COLS)).map((_) =>
      Array.from(Array(BOARD_ROWS))
    );

    setBoard(baseBoard);
  };

  const handleSetDisk = (col: number, row: number) => {
    if (isGameOver || board[col][row] !== undefined) {
      return;
    }

    setBoard((prev) => {
      prev[col][row] = currentPlayer;
      return [...prev];
    });
  };

  return (
    <div className="bg-white flex justify-center gap-4 rounded-xl p-4 border-3 border-black border-solid">
      {board.map((row, i) => {
        return (
          <div key={`row-${i}`} className="flex flex-col gap-4">
            {row.map((player, j) => {
              return (
                <Tile
                  key={`col-${j}`}
                  setDisk={() => handleSetDisk(i, j)}
                  occupied={player}
                  currentPlayer={currentPlayer}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
