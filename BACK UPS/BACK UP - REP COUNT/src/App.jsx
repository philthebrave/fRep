import "./styles.css"
import { useState } from 'react'
import CountdownTimer from './timer'
import AddRep from "./addrep"

export default function App() {
  const [newRestTime, setnewRestTime] = useState("30")
  const [newWarningTime, setnewWarningTime] = useState("7")
  const [newRepCount, setnewRepCount] = useState("0")

  // To mitigate refreshing issue associated with REACT:
  const [refreshKey, setRefreshKey] = useState(0)
  const triggerRefresh = () => {
        setRefreshKey(prevKey => prevKey + 1); // Changing the key forces remount
      };
  
  console.log(CountdownTimer.toString)

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
        triggerRefresh();
        }}
        id="resttime"
        min="10"
        max="30"/>
      <br></br>
      <h4>Enter WARNING time (min 5, max 10):</h4>
      <input
        type="number"
        value={newWarningTime}
        onChange={e => setnewWarningTime(e.target.value)}
        id="warningtime"
        min="5"
        max="10"/>
  </form>

  <div className="timer">
    {/* <h1>{newRestTime}</h1> */}
    <CountdownTimer key={refreshKey} initialSeconds={newRestTime} warningSeconds={newWarningTime}/>
    {/* <Square inputVal={newRestTime}/> */}
    {/* <h3>{newWarningTime}</h3> */}
  </div>
  
  {/* <div className="reps">
    <h3>Rep Counter</h3>
    {newRepCount}
    <button class="bigbutton" onClick={() => setnewRepCount(AddRep(newRepCount))}>REP</button>
    <button onClick={() => setnewRepCount("0")}>Reset</button>
  </div> */}
  </>

  )
  
}
