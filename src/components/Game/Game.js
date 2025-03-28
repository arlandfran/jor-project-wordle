import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameState, setGameState] = React.useState("running");

  function handleAddGuess(guess) {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    if (guess === answer) {
      setGameState("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameState("lost");
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput gameState={gameState} handleAddGuess={handleAddGuess} />
      {gameState === "won" && <WonBanner numOfGuesses={guesses.length} />}
      {gameState === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
