import "./Cell.css";

function isPlrThrinCell(props) {
  var cellId = props.id;
  var plrCellId = props.plr_row_mid + "-" + props.plr_col_mid;

  var isPlrThrinCell = cellId === plrCellId;
  return isPlrThrinCell;
}

function isMushroomHome(props) {
  return props.randomChosenPos.indexOf(props.id) >= 0;
}

function Cell(props) {
  var baseCls = "cell";

  if (isPlrThrinCell(props)) {
    var topUpCls = "hasPlayer";
    baseCls = baseCls + " " + topUpCls;
  }

  if (isMushroomHome(props)) {
    var topUpCls = "hasMushroom";
    baseCls = baseCls + " " + topUpCls;
  }

  return <div id={props.id} className={baseCls}></div>;
}

export default Cell;
