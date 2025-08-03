import { useState, useEffect, useRef } from 'react';
import PlayBegin from './begin';
import PlayGetReady from './getready';
import PlayRecover from './recover';
import AddRep from "./addrep"
import PrintArray from './printarray';

const CountdownTimer = ({ initialSeconds, warningSeconds }) => {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const [newRepCount, setnewRepCount] = useState(0);
  const [repArray, setRepArray] = useState([]);

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
      setSecondsLeft(initialSeconds);
      setRepArray([...repArray, newRepCount]);
    }
    // Cleanup function to clear the interval when the component unmounts
    // or when isRunning or secondsLeft changes (if not running)
    return () => clearInterval(interval);
  }, [isRunning, secondsLeft]); // Re-run effect when isRunning or secondsLeft changes

  const handleReset = () => {
    setnewRepCount(0);
    setRepArray([]);
  };

  const handleStart = () => {
    setIsRunning(true);
    PlayRecover();
  }

  return (
    <>
    <div className="timer">
      <h2>Recovery Time: {secondsLeft} Seconds</h2>
      <button className="bigbutton" onClick={() => handleStart()} disabled={isRunning || secondsLeft === 0}>Start Recovery</button>
      <h2>Rep Counter: {newRepCount} Reps</h2>
      <button className="bigbutton" onClick={() => setnewRepCount(AddRep(newRepCount))} disabled={isRunning}>REP</button>
    </div>
    <br></br>
    <PrintArray array={repArray} final={newRepCount}/>
    <br></br>
    <br></br>
    <button onClick={() => handleReset()} disabled={Number(newRepCount) === 0}>Reset</button>
    </>
  );
};

export default CountdownTimer;
