import React, { useContext } from "react";
import { PlayerTurnContext } from "./PlayerTurnContext";

function Square(props) {
  const turn = useContext(PlayerTurnContext);
  
  const winnerAnnouncement = document.querySelector('.winner-announcement');
  const checkRow = (squares) => {
    if (squares[0].textContent == squares[1].textContent && squares[1].textContent == squares[2].textContent) {
      if (squares[0].textContent != "" && squares[1].textContent != "" && squares[2].textContent != "") {
        winnerAnnouncement.append(`${squares[0].textContent} wins`)
        return true
        
      }
        
    } 
    if (squares[3].textContent == squares[4].textContent && squares[4].textContent == squares[5].textContent) {
      if (squares[3].textContent != "" && squares[4].textContent != "" && squares[5].textContent != "") {
        winnerAnnouncement.append(`${squares[3].textContent} wins`)
        return true
      } 
      
    }
    if (squares[6].textContent == squares[7].textContent && squares[7].textContent == squares[8].textContent) {
      if (squares[6].textContent != "" && squares[7].textContent != "" && squares[8].textContent != "") {
        winnerAnnouncement.append(`${squares[6].textContent} wins`)
        return true
      }
    }
  }
  const checkColumn = (squares) => {
    if (squares[0].textContent == squares[3].textContent && squares[3].textContent == squares[6].textContent) {
      if (squares[0].textContent != "" && squares[3].textContent != "" && squares[6].textContent != "") {
        winnerAnnouncement.append(`${squares[0].textContent} wins`)
        return true
        
      }
        
    } 
    if (squares[1].textContent == squares[4].textContent && squares[4].textContent == squares[7].textContent) {
      if (squares[1].textContent != "" && squares[4].textContent != "" && squares[7].textContent != "") {
        winnerAnnouncement.append(`${squares[1].textContent} wins`)
        return true
      } 
      
    }
    if (squares[2].textContent == squares[5].textContent && squares[5].textContent == squares[8].textContent) {
      if (squares[2].textContent != "" && squares[5].textContent != "" && squares[8].textContent != "") {
        winnerAnnouncement.append(`${squares[2].textContent} wins`)
        return true
      }
    }
  }

  const checkDiagonal = (squares) => {
    if (squares[0].textContent == squares[4].textContent && squares[4].textContent == squares[8].textContent) {
      if (squares[0].textContent != "" && squares[4].textContent != "" && squares[8].textContent != "") {
        winnerAnnouncement.append(`${squares[0].textContent} wins`)
        return true
        
      }
        
    } 
    if (squares[2].textContent == squares[4].textContent && squares[4].textContent == squares[6].textContent) {
      if (squares[2].textContent != "" && squares[4].textContent != "" && squares[6].textContent != "") {
        winnerAnnouncement.append(`${squares[2].textContent} wins`)
        return true
      } 
      
    }
  }
  const handleClick = () => {
    const squares = document.querySelectorAll(".square");
    const position = `${props.position}`;
    
    for (let i = 0; i < squares.length; i++) {
      if (position == i && squares[i].textContent == "") {
        if (turn.playerTurn == 'O') {
          squares[i].innerHTML = `<p style = margin-top:15px;color:red;font-weight:bold>${turn.playerTurn}</p>`;
        } else {
          squares[i].innerHTML = `<p style = margin-top:15px>${turn.playerTurn}</p>`;
        
        }
        
        if (checkRow(squares) || checkColumn(squares) || checkDiagonal(squares)) {
          squares.forEach(square => {
            square.style.pointerEvents = "none";
          });
          return
        }
        
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
