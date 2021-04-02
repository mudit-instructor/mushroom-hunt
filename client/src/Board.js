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

function createGrid(props) {

  var grid = [], row = [];

  for (var ro = 0; ro < props.rows; ro++) {
      row = [];
    for (var col = 0; col < props.cols; col++) {
      row.push(ro+"-"+col);
    }
    grid.push(row);
  }
   return grid;
}

function Board(props) {

  var plr_row_mid = Math.floor(props.rows/2);
  var plr_col_mid = Math.floor(props.cols/2);

  var grid = createGrid(props);

  var gridJSX = grid.map(function(row, indx) {
    var rowJSX = row.map(function(cell, cid) {
      return <Cell key={cell} id={cell} plr_row_mid={plr_row_mid} plr_col_mid={plr_col_mid}/>;
    });
    return <Row key={indx}>{rowJSX}</Row>
  });

  return (
      <div className="parentOfBoard">
    <div className="board">
      {gridJSX}
    </div>
    </div>
  );
}

export default Board;
