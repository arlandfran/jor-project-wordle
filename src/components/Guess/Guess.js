import React from "react";
import { range } from "../../utils";

function Guess({ word }) {
  return (
    <p className="guess">
      {range(5).map((i) => (
        <span key={i} className={`cell ${word ? word[i].status : ""}`}>
          {word ? word[i].letter : ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
