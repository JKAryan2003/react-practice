import React, { useReducer } from 'react'

const Three6 = () => {

  const reducer = (state, action) => {

    switch (action.type) {
      case "increment":
        return state + 1;
      
      case "decrement":
        return state - 1;

      case "reset":
        return (state = 0);
      
      default:
        break;
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

      <button onClick={ () => dispatch( { type: "reset" } ) }>
        Reset
      </button>
    </div>
  )
}

export default Three6