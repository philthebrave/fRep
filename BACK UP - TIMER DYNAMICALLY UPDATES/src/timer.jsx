import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialSeconds }) => {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft(prevSeconds => prevSeconds - 1);
      }, 1000); // Update every second
    } else if (secondsLeft === 0) {
      clearInterval(interval);
      setIsRunning(false); // Stop the timer when it reaches zero
    }

    // Cleanup function to clear the interval when the component unmounts
    // or when isRunning or secondsLeft changes (if not running)
    return () => clearInterval(interval);
  }, [isRunning, secondsLeft]); // Re-run effect when isRunning or secondsLeft changes

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setSecondsLeft(initialSeconds);
    setIsRunning(false);
  };

  return (
    <div>
      <h1>Time Left: {secondsLeft} seconds</h1>
      <div className="buttonrow">
        <button onClick={startTimer} disabled={isRunning || secondsLeft === 0}>Start</button>
        <button onClick={stopTimer} disabled={!isRunning}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default CountdownTimer;
