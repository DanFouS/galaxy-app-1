import React from "react";
import "./index.css";
import TryAgain from "./TryAgain";

export default function ReleaseWin(props) {
  if (props.winner === "You won!!") {
    return (
      <div>
        <h1
          style={{
            margin: "100px",
            color: "white",
            width: "200px",
            textalign: "center",
            fontsize: "50px",
            fontweight: "bold",
          }}
        >
          {props.winner}
        </h1>
        <h1
          style={{
            margin: "100px",
            color: "white",
            width: "200px",
            textalign: "center",
            fontsize: "50px",
            fontweight: "bold",
          }}
        >
          Your score is {props.score}
        </h1>
        <h1
          style={{
            margin: "100px",
            color: "white",
            width: "200px",
            textalign: "center",
            fontsize: "50px",
            fontweight: "bold",
          }}
        >
          Let's complete our trip
        </h1>
      </div>
    );
  } else if (props.winner === "It's a draw") {
    return (
      <div>
        <h1
          style={{
            margin: "100px",
            color: "white",
            width: "200px",
            textalign: "center",
            fontsize: "50px",
            fontweight: "bold",
          }}
        >
          {props.winner}
        </h1>
        <TryAgain handleClickRender={props.handleClickRender} />
      </div>
    );
  } else if (props.winner === "Opss! You lost") {
    return (
      <div>
        <h1
          style={{
            margin: "100px",
            color: "white",
            width: "200px",
            textalign: "center",
            fontsize: "50px",
            fontweight: "bold",
          }}
        >
          {props.winner}
        </h1>
        <h1
          style={{
            margin: "100px",
            color: "white",
            width: "200px",
            textalign: "center",
            fontsize: "50px",
            fontweight: "bold",
          }}
        >
          See u next time
        </h1>
      </div>
    );
  }
}
