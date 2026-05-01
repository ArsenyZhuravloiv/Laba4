export default function GameStatus({ gameOver }) {
  return <div>{gameOver ? "Game Over 😢" : "Playing..."}</div>;
}
