import "./styles.css"
import { useState } from 'react'
import CountdownTimer from './timer'
import playSequentialAudio from "./playall3"
import AddRep from "./addrep"
import PrintArray from "./printarray"

export default function App() {
  const [newRestTime, setnewRestTime] = useState("30")
  const [newWarningTime, setnewWarningTime] = useState("7")
  const [newRepCount, setnewRepCount] = useState(0);
  const [repArray, setRepArray] = useState([]);
  const [disabledStart, setDisabledStart] = useState(false);
  const [disabledRep, setDisabledRep] = useState(false);
  
  const handleStart = () => {
    setDisabledStart(true);
    setDisabledRep(true);
    setTimeout(() => {
      setDisabledStart(false);
    }, Number((newRestTime*1000)+5000));
    setTimeout(() => {
      setDisabledRep(false);
    }, Number(newRestTime*1000));
    playSequentialAudio(newRestTime, newWarningTime);
    // console.log("newRepCount: " + newRepCount)
    // console.log("repArray: " + repArray)
    setRepArray(prevArray => [...prevArray, newRepCount])
  };

  const handleReset = () => {
    setnewRepCount(0);
    setRepArray([]);
  };

  return (
  <>
  <div className="fRep"><h1>fRep</h1></div>

  <form className="restandwarningform">
      <h4>Enter REST time (min 10, max 30):</h4>
      <input 
        type="number"
        value={newRestTime}
        onChange={(e) => {
        setnewRestTime(e.target.value);
        }}
        id="resttime"
        min="10"
        max="30"/>
      <br></br>
      <h4>Enter WARNING time (min 5, max 9):</h4>
      <input
        type="number"
        value={newWarningTime}
        onChange={e => setnewWarningTime(e.target.value)}
        id="warningtime"
        min="5"
        max="9"/>
  </form>
  <br></br>
  <br></br>
  <button className="bigbutton" onClick={() => handleStart()} disabled={disabledStart}>START RECOVERY</button>
  
  <h2>Rep Counter: {newRepCount} Reps</h2>
  <button className="bigbutton" onClick={() => setnewRepCount(AddRep(newRepCount))} disabled={disabledRep}>REP</button>
  <br></br>
  <br></br>
  <PrintArray array={repArray} final={newRepCount}/>
  <br></br>
  <br></br>
  <button onClick={() => handleReset()} disabled={Number(newRepCount) === 0}>Reset</button>
  </>
    )
  
  }
  
  


