import type { NextPage } from "next";
import { useState } from "react";
import { Board } from "../components/Board";
import { Header } from "../components/Header";
import { PlayerCard } from "../components/PlayerCard";
import { PlayerTurn } from "../components/PlayerTurn";
import { Player } from "../utils/Player";
import { Score } from "../utils/Score";

const Home: NextPage = () => {
  const [startingPlayer, setStartingPlayer] = useState<Player>(
    Player.PLAYER_ONE
  );
  const [currentPlayer, setCurrentPlayer] = useState<Player>(Player.PLAYER_ONE);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [score, setScore] = useState<Score>({ playerOne: 0, playerTwo: 0 });

  const handleSetCurrentPlayer = () => {
    currentPlayer === Player.PLAYER_ONE
      ? setCurrentPlayer(Player.PLAYER_TWO)
      : setCurrentPlayer(Player.PLAYER_ONE);
  };

  return (
    <>
      <Header />
      <div className="w-full flex justify-between items-center mt-8">
        <PlayerCard player={Player.PLAYER_ONE} winCount={score.playerOne} />
        <PlayerTurn player={currentPlayer} />
        <PlayerCard player={Player.PLAYER_TWO} winCount={score.playerTwo} />
      </div>
      <div className="mt-8">
        <Board
          isGameOver={isGameOver}
          currentPlayer={currentPlayer}
          setCurrentPlayer={handleSetCurrentPlayer}
        />
      </div>
    </>
  );
};

export default Home;
