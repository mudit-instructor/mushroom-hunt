import Row from "./Row.js";
import Cell from "./Cell.js";
import React from "react";
import './Board.css';

function repeatCell(noOfCols) {
  var cellArr = [];
  for (var i = 0; i < noOfCols; i++) {
    cellArr.push(<Cell key={i} />);
  }
  return cellArr;
}

function repeatRows(noOfRows, noOfCols) {
    var rowArr = [];
    for (var i = 0; i < noOfRows; i++) {
        rowArr.push(<Row  key={i}>{repeatCell(noOfCols)}</Row>);
      }
      return rowArr;
}

function Board(props) {
  return (
      <div className="parentOfBoard">
    <div className="board">
      {repeatRows(props.rows, props.cols)}
    </div>
    </div>
  );
}

export default Board;
