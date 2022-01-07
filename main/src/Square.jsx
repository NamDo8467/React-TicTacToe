import React, { useContext } from "react";
import { PlayerTurnContext } from "./PlayerTurnContext";

function Square(props) {
  const turn = useContext(PlayerTurnContext);
  const handleClick = () => {
    const squares = document.querySelectorAll(".square");
    const position = `${props.position}`;
    for (let i = 0; i < squares.length; i++) {
      if (position == i && squares[i].textContent == "") {
        squares[i].innerHTML = `<p style = margin-top:15px>${turn.playerTurn}</p>`;
        if (turn.playerTurn == "X") {
          turn.setPlayerTurn("O");
        } else {
          turn.setPlayerTurn("X");
        }
        break;
      }
    }
  };
  const style = {
    height: "50px",
    width: "50px",
    border: "0.5px solid black",
    display: "inline-block",
    textAlign: "center",
    margin: "0",
  };
  return <div className="square" style={style} onClick={handleClick}></div>;
}

export default Square;
