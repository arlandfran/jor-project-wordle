import React from "react";

function GuessInput({ gameState, handleAddGuess }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    handleAddGuess(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
        pattern="^.{5,5}$"
        title="Must be five characters"
        disabled={gameState !== "running"}
      />
    </form>
  );
}

export default GuessInput;
