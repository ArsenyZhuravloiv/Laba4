import Cell from "./Cell";

export default function Board({ board, onCellClick }) {
  return (
    <div>
      {board.map((row, x) => (
        <div key={x} style={{ display: "flex" }}>
          {row.map((cell, y) => (
            <Cell
              key={y}
              cell={cell}
              onClick={() => onCellClick(x, y)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
