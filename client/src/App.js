import logo from './logo.svg';
import './App.css';
import Board from './Board.js';

function App() {
  const rows = prompt("Enter the number of rows");
  const cols = prompt("Enter the number of columns");
  return <Board cols={cols} rows={rows}/>;
}

export default App;
