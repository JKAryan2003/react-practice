import React, { useState } from 'react'


const Event = ({ handleClick, text, children, operation }) => {
  return (
    <div>
      
      <button onClick={handleClick}>
        {text}
      </button>
      <p>You have clicked {children}</p>
    </div>
  )
}

export default Event
