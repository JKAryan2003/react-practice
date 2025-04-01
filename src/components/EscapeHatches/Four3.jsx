import React, { useEffect, useState } from 'react'
import NavBar from '../Router/NavBar';
import { Outlet, useNavigate } from 'react-router-dom';

const Four3 = () => {

  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);  
  const navigate = useNavigate()

  const handleButton = () => {
    navigate('three1')
  }

  //runs on every render
  // useEffect(() => {
  //   alert("Runs on every render")
  // })

  //runs on 1st render
  // useEffect(() => {
  //   alert("Run on 1st render")
  // }, [])
  
  //dependancy list changed
  // useEffect(() => {
  //   alert("Triggers when count is updated")
  // }, [count])

  //multiple dependancy
  // useEffect(() => {
  //   alert("Triggers because of multiple dependancy")
  // }, [count, total])

  // useEffect(() => {
  //   alert("Count is updated")
  
  //   return () => {
  //     alert("Count is unmounted")
  //   }
  // }, [count])
  
  
  
  function handleClick () {
    setCount(count + 1)
  }
  
  function hanldeTotal () {
    setTotal(total + 1)
  }
  
  return (
    <div>
      Count is {count}
      <button onClick={handleClick}>
        Counter
      </button>

      Total is {total}
      <button onClick={hanldeTotal}>
        Total
      </button>

      <button onClick={handleButton}>Go to three 1</button>
      <Outlet />
    </div>
  )
}

export default Four3