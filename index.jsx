import { useState } from "react";
import Board from "./components/Board";
import Timer from "./components/Timer";
import GameStatus from "./components/GameStatus";
import RestartButton from "./components/RestartButton";
import styles from "./Game.module.css";

const SIZE = 8;
const MINES = 10;

function generateBoard() {
  const board = Array(SIZE)
    .fill()
    .map(() =>
      Array(SIZE).fill({
        isMine: false,
        revealed: false,
        flagged: false,
      })
    );

  let minesPlaced = 0;
  while (minesPlaced < MINES) {
    const x = Math.floor(Math.random() * SIZE);
    const y = Math.floor(Math.random() * SIZE);

    if (!board[x][y].isMine) {
      board[x][y] = { ...board[x][y], isMine: true };
      minesPlaced++;
    }
  }

  return board;
}

export default function Minesweeper() {
  const [board, setBoard] = useState(generateBoard());
  const [gameOver, setGameOver] = useState(false);

  const revealCell = (x, y) => {
    if (gameOver) return;

    const newBoard = [...board];

    if (newBoard[x][y].isMine) {
      setGameOver(true);
    }

    newBoard[x][y] = { ...newBoard[x][y], revealed: true };
    setBoard(newBoard);
  };

  const restartGame = () => {
    setBoard(generateBoard());
    setGameOver(false);
  };

  return (
    <div className={styles.container}>
      <h1>Minesweeper</h1>

      <GameStatus gameOver={gameOver} />
      <Timer gameOver={gameOver} />
      <RestartButton onRestart={restartGame} />

      <Board board={board} onCellClick={revealCell} />
    </div>
  );
}
