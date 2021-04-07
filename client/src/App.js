import logo from "./logo.svg";
import "./App.css";
import Board from "./Board.js";
import _ from "lodash";

function createGrid(props) {
  var grid = [],
    row = [];

  for (var ro = 0; ro < props.rows; ro++) {
    row = [];
    for (var col = 0; col < props.cols; col++) {
      row.push(ro + "-" + col);
    }
    grid.push(row);
  }
  return grid;
}

function App() {
  const rows = prompt("Enter the number of rows");
  const cols = prompt("Enter the number of columns");

  var plr_row_mid = Math.floor(rows / 2);
  var plr_col_mid = Math.floor(cols / 2);

  var grid = createGrid({ rows, cols });
  var flatGrid = _.flatten(grid);
  var flatGridWithoutPlr = flatGrid.filter(
    (item) => item !== plr_row_mid + "-" + plr_col_mid
  );

  var randomChosenPos = _.sampleSize(flatGridWithoutPlr, cols);

  return <Board cols={cols} rows={rows} plr_row_mid={plr_row_mid} plr_col_mid={plr_col_mid} randomChosenPos={randomChosenPos} grid={grid}/>;
}

export default App;
