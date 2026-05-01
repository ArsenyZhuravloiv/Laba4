import { useEffect, useState } from "react";

export default function Timer({ gameOver }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [gameOver]);

  return <div>Time: {time}</div>;
}
