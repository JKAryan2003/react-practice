import React, { useRef, useState } from 'react'
import NavBar from '../Router/NavBar';

const Four2 = () => {

  const [time, setTime] = useState(0);
  let timeRef = useRef(null)

  function startTimer() {
    timeRef.current = setInterval(() => {
      setTime(time => time + 1) 
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timeRef.current)
    timeRef.current = null
  }

  function resetTimer() {
    stopTimer()
    setTime(0)
  }

  return (
    <div>

      <h1>Stopwatch: {time}</h1>

      <button onClick={startTimer}>
        Start
      </button>

      <button onClick={stopTimer}>
        Stop
      </button>

      <button onClick={resetTimer}>
        Reset
      </button>
    </div>
  )
}

export default Four2