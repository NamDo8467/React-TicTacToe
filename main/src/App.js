import React from "react";
import Square from "./Square.jsx";
import Row from "./Row";
import { PlayerTurnProvider } from "./PlayerTurnContext.jsx";

function App() {
  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "400px",
  };
  return (
    <div className="App" style={style}>
      <PlayerTurnProvider>
        <Row>
          <Square position="0" />
          <Square position="1" />
          <Square position="2" />
        </Row>
        <Row>
          <Square position="3"></Square>
          <Square position="4"></Square>
          <Square position="5"></Square>
        </Row>
        <Row>
          <Square position="6"></Square>
          <Square position="7"></Square>
          <Square position="8"></Square>
        </Row>
      </PlayerTurnProvider>
    </div>
  );
}

export default App;
