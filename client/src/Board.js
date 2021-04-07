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
  debugger;

  var [plrRowLoc, setPlrRowLoc] = useState(props.plr_row_mid);
  var [plrColLoc, setPlrColLoc] = useState(props.plr_col_mid);

  var getTopMush = props.randomChosenPos[0];
  var [mushRowLoc, mushColLoc] = getTopMush.split("-");

  var verticalSep = mushRowLoc - plrRowLoc;
  var horizontalSep = mushColLoc - plrColLoc;

  useEffect(() => {
    setTimeout(() =>{ 
      moveHorizontally(horizontalSep, plrColLoc, setPlrColLoc);
      moveVertically(verticalSep, plrRowLoc, setPlrRowLoc);
    }, 1000);
    debugger;
  });

  var gridJSX = props.grid.map(function (row, indx) {
    var rowJSX = row.map(function (cell, cid) {
      return (
        <Cell
          key={cell}
          id={cell}
          plr_row_mid={plrRowLoc}
          plr_col_mid={plrColLoc}
          randomChosenPos={props.randomChosenPos}
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
