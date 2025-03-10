import React, { useState } from 'react'

const Two4 = () => {
  const [walk, setWalk] = useState(true)

  function handleClick() {
    setWalk(!walk)
  }
  return (
    <div>
      <button onClick={handleClick}>
        Change to {walk? 'Stop' : 'Walk'}
      </button>

      <h1 style={{color: walk? 'darkgreen' : 'red'}}>
        {walk ? 'Walking' : 'Stopped'}
      </h1>
    </div>
  )
}

export default Two4