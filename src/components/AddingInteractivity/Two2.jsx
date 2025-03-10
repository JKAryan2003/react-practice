import { sculptureList } from './data1'

import React, { useState } from 'react'

const Two2 = () => {

  const [index, setIndex] = useState(0)
  const [showMore, setShowMore] = useState(false)

  let hasPrev = index > 0
  let hasNext = index < sculptureList.length-1;

  function handleNextClick(){
    if (hasNext){
      setIndex(index + 1);
    }
  }

  function handlePrevClick(){
    if (hasPrev){
      setIndex(index - 1);
    }
  }

  function handleShow(){
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index]
  return (
    <div>
      <button onClick={handlePrevClick} disabled={!hasPrev}>
        Previous
      </button>
      <button onClick={handleNextClick} disabled={!hasNext}>
        Next
      </button>

      <h1>{sculpture.name}</h1>
      <p>{index+1} of {sculptureList.length}</p>

      <button onClick={handleShow}>
        {showMore ? "Hide" : "Show" } Details
      </button>

      {showMore && <p>{sculpture.description}</p>}
    </div>
  )
}

export default Two2