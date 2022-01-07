import React from "react";

function Row({ children }) {
  const style = {
    margin: "0px",
    height: "50px",
    display: "flex",
  };
  return <div style={style}>{children}</div>;
}

export default Row;
