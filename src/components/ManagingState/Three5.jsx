import React, { act, useReducer, useState } from 'react'

const Three5 = () => {

  const reducer = (state, action) => {

    if (action.type === "increment"){
      return state + 1
    }

    if (action.type === "decrement"){
      return state - 1
    }
  }

  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      {count}
      <button onClick={() => dispatch( { type: "increment"})}>
        Increment
      </button>

      <button onClick={() => dispatch( { type: "decrement" } )}>
        Decrement
      </button>
    </div>
  )
}

export default Three5