import React, { useContext } from "react";
import { PlayerTurnContext } from "./PlayerTurnContext";

function RestartButton({ children }) {
  const turn = useContext(PlayerTurnContext);
  const style = {
    marginTop: "10px",
  };

  const restart = () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.textContent = "";
      square.style.pointerEvents = "auto";
    });
    turn.setPlayerTurn("X");

    const winnerAnnouncement = document.querySelector(".winner-announcement");
    winnerAnnouncement.textContent = "";
  };
  return (
    <div style={style}>
      <input type="button" value={children} onClick={restart} />
    </div>
  );
}

export default RestartButton;
