import Row from "./Row.js";
import Cell from "./Cell.js";
import React, { useEffect, useState } from "react";
import "./Board.css";

function moveVertically(verticalSep, plrRowLoc, setPlrRowLoc) {
  if (verticalSep < 0) {
    setPlrRowLoc(plrRowLoc - 1);
  } else if (verticalSep > 0) {
    setPlrRowLoc(plrRowLoc + 1);
  }
}

function moveHorizontally(horizontalSep, plrColLoc, setPlrColLoc) {
  if (horizontalSep < 0) {
    setPlrColLoc(plrColLoc - 1);
  } else if (horizontalSep > 0) {
    setPlrColLoc(plrColLoc + 1);
  }
}

function Board(props) {

  var [plrRowLoc, setPlrRowLoc] = useState(props.plr_row_mid);
  var [plrColLoc, setPlrColLoc] = useState(props.plr_col_mid);
  var [mushPosArr, setMushPosArr] = useState(props.randomChosenPos);
  var [stepsTaken, setStepsTaken] = useState(0);

  var getTopMush = mushPosArr[0];
  var [mushRowLoc, mushColLoc] = getTopMush.split("-");

  var verticalSep = mushRowLoc - plrRowLoc;
  var horizontalSep = mushColLoc - plrColLoc;

  useEffect(() => {
    setTimeout(() => {
      moveVertically(verticalSep, plrRowLoc, setPlrRowLoc);
      if (verticalSep === 0) {
        moveHorizontally(horizontalSep, plrColLoc, setPlrColLoc);
      }
      if (verticalSep !== 0 || horizontalSep !== 0) {
        setStepsTaken(stepsTaken + 1);
      }

      console.log("steps", stepsTaken);

      var currPlrLoc = plrRowLoc + "-" + plrColLoc;

      if (mushPosArr.includes(currPlrLoc)) {
        setMushPosArr((mushPosArr) => {
          return mushPosArr.filter(mushPosh => mushPosh !== currPlrLoc);
        });
      }

    }, 1000);
  });

  var gridJSX = props.grid.map(function (row, indx) {
    var rowJSX = row.map(function (cell, cid) {
      return (
        <Cell
          key={cell}
          id={cell}
          plr_row_mid={plrRowLoc}
          plr_col_mid={plrColLoc}
          randomChosenPos={mushPosArr}
        />
      );
    });
    return <Row key={indx}>{rowJSX}</Row>;
  });

  return (
    <div className="parentOfBoard">
      <div className="board">{gridJSX}</div>
    </div>
  );
}

export default Board;
