import { useState, useEffect, useRef } from 'react';
import PlayBegin from './begin';
import PlayGetReady from './getready';

const CountdownTimer = ({ initialSeconds, warningSeconds }) => {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  // const [warningSecondsLeft, setWarningSecondsLeft] = useState(warningSeconds);
  const [isRunning, setIsRunning] = useState(false);
  // console.log(warningSeconds)
  useEffect(() => {
    let interval = null;

    if (isRunning && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft(prevSeconds => prevSeconds - 1);
      }, 1000); // Update every second
      // ----------------------------------
      if (secondsLeft === Number(warningSeconds)) {
        PlayGetReady();}
      // ----------------------------------
    } else if (secondsLeft === 0) {
      PlayBegin();      
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
    // setWarningSecondsLeft(warningSeconds);
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
