import { useEffect, useState } from "react";
import { Player } from "../utils/Player";
import { Tile } from "./Tile";

const BOARD_COLS = 7;
const BOARD_ROWS = 6;

export const Board: React.FC<{
  isGameOver: boolean;
  currentPlayer: Player;
  setCurrentPlayer: () => void;
}> = ({ isGameOver, currentPlayer, setCurrentPlayer }) => {
  const [board, setBoard] = useState<(Player | undefined)[][]>([]);
  const [availableSlots, setAvailableSlots] = useState<Array<number>>(
    Array.from(Array(BOARD_COLS)).map(() => BOARD_ROWS - 1)
  );

  useEffect(() => {
    setupBoard();
  }, []);

  const setupBoard = () => {
    const baseBoard = Array.from(Array(BOARD_COLS)).map((_) =>
      Array.from(Array(BOARD_ROWS))
    );

    setBoard(baseBoard);
  };

  const handleSetDisk = (colIndex: number, rowIndex: number) => {
    const whereToPlaceTheNextPiece = availableSlots[colIndex];
    const diskPosition = availableSlots[colIndex] - 1;

    if (isGameOver || board[colIndex][rowIndex] !== undefined) return;
    if (whereToPlaceTheNextPiece <= 0) return;

    setAvailableSlots((prev) => {
      prev[colIndex] = diskPosition;
      return [...prev];
    });

    setBoard((prev) => {
      prev[colIndex][whereToPlaceTheNextPiece] = currentPlayer;
      return [...prev];
    });

    setCurrentPlayer();
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
