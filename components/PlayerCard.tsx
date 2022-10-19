import { Player } from "../utils/Player";

export const PlayerCard: React.FC<{
  player: Player;
  winCount: number;
}> = ({ player, winCount }) => {
  let cardClasses = `w-48 p-4 rounded flex flex-col items-center ${
    player === Player.PLAYER_ONE ? "bg-red-200" : "bg-blue-200"
  }`;

  return (
    <div className={cardClasses}>
      <p className="text-lg font-medium">
        {player === Player.PLAYER_ONE ? "Player 1" : "Player 2"}
      </p>
      <p className="text-2xl font-bold mt-1">
        {winCount} <span className="text-sm">Wins</span>
      </p>
    </div>
  );
};
