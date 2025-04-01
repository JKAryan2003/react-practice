import React, { useRef, useState } from 'react'
import NavBar from '../Router/NavBar';

const Four1 = () => {

  const [count, setCount] = useState(0);
  let val = useRef(0)

  let btnRef = useRef()

  function handleIncrement () {
    val.current = val.current + 1
    console.log(val);
    setCount(count + 1)
  }

  function changeColor () {
    btnRef.current.style.backgroundColor = "red"
  }

  return (
    <div>

      <button onClick={handleIncrement} ref={btnRef}>
        Increment
      </button>

      <div>
        {count}
      </div>

      <button onClick={changeColor}>
        Change Color of first button
      </button>

    </div>
  )
}

export default Four1