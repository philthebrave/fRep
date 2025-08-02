import "./styles.css"
import { useState } from 'react'
import CountdownTimer from './timer'

export default function App() {
  const [newRestTime, setnewRestTime] = useState("30")
  const [newWarningTime, setnewWarningTime] = useState("7")

  // To mitigate refreshing issue associated with REACT:
  const [refreshKey, setRefreshKey] = useState(0)
  const triggerRefresh = () => {
        setRefreshKey(prevKey => prevKey + 1); // Changing the key forces remount
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
        max="9"/>
  </form>

  <div>
    <CountdownTimer key={refreshKey} initialSeconds={newRestTime} warningSeconds={newWarningTime}/>
  </div>
  
  </>

  )
  
}
