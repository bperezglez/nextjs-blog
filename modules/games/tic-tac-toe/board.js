import Square from "./square";
import styles from './board.module.css'

export default function Board(props) {
  const renderSquare = (i) => <Square
    value={props.squares[i]}
    onClick={() => props.onClick(i)}
    />

  return (
    <div>
      <div className={styles.boardRow}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className={styles.boardRow}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className={styles.boardRow}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}