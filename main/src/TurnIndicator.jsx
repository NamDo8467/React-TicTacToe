import React, {useContext} from 'react'
import { PlayerTurnContext } from "./PlayerTurnContext";

function TurnIndicator() {
  const turn = useContext(PlayerTurnContext);

    return (
        <div>
            {turn.playerTurn == "O" ? <p style={{color:'red'}}>{turn.playerTurn}'s turn</p> : <p style={{color:'blue'}}>{turn.playerTurn}'s turn</p>}
        </div>
    )
}

export default TurnIndicator
