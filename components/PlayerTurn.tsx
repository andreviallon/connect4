import React from "react";
import { Player } from "../utils/Player";

export const PlayerTurn: React.FC<{ player: Player }> = ({ player }) => {
  let classes = "text-xl font-semibold ";

  if (player === Player.PLAYER_ONE) {
    classes += "text-red-600";
  }

  if (player === Player.PLAYER_TWO) {
    classes += "text-blue-600";
  }

  return (
    <p className={classes}>
      Player {player === Player.PLAYER_ONE ? "1'" : "2'"}s turn!
    </p>
  );
};
