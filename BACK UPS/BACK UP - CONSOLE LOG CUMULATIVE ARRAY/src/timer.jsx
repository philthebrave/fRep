import { useState, useEffect, useRef } from 'react';
import PlayBegin from './begin';
import PlayGetReady from './getready';
import AddRep from "./addrep"
import PrintArray from './printarray';

const CountdownTimer = ({ initialSeconds, warningSeconds }) => {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const [newRepCount, setnewRepCount] = useState("0");
  const [repArray, setRepArray] = useState([]);
  // const [printOut, setPrintOut] = useState([])

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
      console.log(repArray)
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
    <>
    <div className="timer">
      <h1>Recovery Time Left: {secondsLeft} seconds</h1>
      <button className="bigbutton" onClick={startTimer} disabled={isRunning || secondsLeft === 0}>Start Recovery</button>
      <div className="buttonrow">
        <button onClick={stopTimer} disabled={!isRunning}>Stop</button>
        <button onClick={resetTimer} disabled={secondsLeft === initialSeconds || isRunning}>Reset</button>
      </div>
    <h3>Rep Counter</h3>
    {/* {repArray}
    <br></br> */}
    {newRepCount}
    <button className="bigbutton" onClick={() => setnewRepCount(AddRep(newRepCount))} disabled={isRunning}>REP</button>
    <button onClick={() => setnewRepCount("0")} disabled={Number(newRepCount) === 0}>Reset</button>
    <button onClick={() => PrintArray(repArray, newRepCount)}>Print</button>
  </div>
  </>
  );
};

export default CountdownTimer;
