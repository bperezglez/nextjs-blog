import Board from './board'
import styles from './ticTacToe.module.css'
import { useState } from 'react'

const defaultState = {
  history: [{
    squares: Array(9).fill(null),
  }],
  stepNumber: 0,
  xIsNext: true,
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function TicTacToe() {
  const [state, setState] = useState(defaultState)
  const history = state.history
  const current = history[state.stepNumber]
  const winner = calculateWinner(current.squares);
  const status = winner ? `Winner: ${winner}` : `Next player: ${state.xIsNext ? 'X' : 'O'}`;

  function handleClick(i) {
    const history = state.history.slice(0, state.stepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice()
    if (winner || squares[i]) return;

    squares[i] = state.xIsNext ? 'X' : 'O';
    setState({history: history.concat([
      {squares}
    ]), xIsNext: !state.xIsNext, stepNumber: history.length})
  }

  function jumpTo(step) {
    setState({
      history: state.history,
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    })
  }

  const moves = history.map((step, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  return (
    <div className={styles.game}>
      <div className={styles.gameBoard}>
        <Board
          squares={current.squares}
          onClick={(i) => handleClick(i)}
        />
      </div>
      <div className={styles.gameInfo}>
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  )
}