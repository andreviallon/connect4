import { Player } from "../utils/Player";

export const Tile: React.FC<{
  occupied: Player | undefined;
  currentPlayer: Player;
  setDisk: () => void;
}> = ({ occupied, currentPlayer, setDisk }) => {
  let classes = "w-24 h-24 border-3 border-solid border-black rounded-full";

  if (!occupied) {
    classes += " bg-violet-500 cursor-pointer";

    if (currentPlayer === Player.PLAYER_ONE) {
      classes += " hover:bg-red-500 hover:bg-opacity-50";
    }

    if (currentPlayer === Player.PLAYER_TWO) {
      classes += " hover:bg-blue-500 hover:bg-opacity-50";
    }
  }

  if (occupied === Player.PLAYER_ONE) {
    classes += " bg-red-500";
  }

  if (occupied === Player.PLAYER_TWO) {
    classes += " bg-blue-500";
  }

  return <div className={classes} onClick={setDisk}></div>;
};
