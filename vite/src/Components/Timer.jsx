// interview questions
// Dropdown Menu
// Timer

import { useEffect, useState } from "react";

const Timer = () => {
  const [data, setData] = useState(0);
  const [running, setRunnnig] = useState(false);

  const handleReset = () => {
    setData(0);
  };

  const startAndPause = () => {
    setRunnnig(!running);
  };

  useEffect(() => {
    let intervalId;
    if (running) {
      intervalId = setInterval(() => {
        setData(data + 1);
      }, 1000);
      setRunnnig(true);
    }
    return () => clearInterval(intervalId);
  }, [running, data]);

  return (
    <>
      <button onClick={startAndPause}>{running ? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
      <div>{data}</div>
    </>
  );
};

export default Timer;
