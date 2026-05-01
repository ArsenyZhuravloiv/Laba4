export default function Cell({ cell, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        width: 30,
        height: 30,
        border: "1px solid black",
        textAlign: "center",
        lineHeight: "30px",
        cursor: "pointer",
        background: cell.revealed ? "#ddd" : "#999",
      }}
    >
      {cell.revealed && (cell.isMine ? "💣" : "")}
    </div>
  );
}
