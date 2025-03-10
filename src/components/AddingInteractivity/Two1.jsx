import React from 'react'

const Two1 = () => {
  function handleClick() {
    let bodyStyle = document.body.style
    if (bodyStyle.backgroundColor == 'black'){
      bodyStyle.backgroundColor = 'white'
    }
    else{
      bodyStyle.backgroundColor = 'black'
    }
  }
  return (
    <div>
      <button onClick={handleClick}>
        Toggle
      </button>
    </div>
  )
}

export default Two1