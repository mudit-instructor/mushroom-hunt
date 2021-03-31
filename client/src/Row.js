import Cell from './Cell.js';
import './Row.css';

function Row(props) {

    return <div className="row">{props.children}</div>;
}

export default Row;