import React, { useState } from "react";

export const PlayerTurnContext = React.createContext("X");
export function PlayerTurnProvider(props) {
  const [playerTurn, setPlayerTurn] = useState("X");
  const changeTurn = () => {
    setPlayerTurn("O");
  };
  return (
    <PlayerTurnContext.Provider value={{ playerTurn, setPlayerTurn }}>
      {props.children}
    </PlayerTurnContext.Provider>
  );
}
