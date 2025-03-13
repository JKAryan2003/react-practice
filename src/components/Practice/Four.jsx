import React from 'react'

const Four = () => {

  const handleClick = (user) => {
    alert("Hello" + user);
  }

  const handleHover = () => {
    alert('Thanks for hovering me');
  }

  return (
    <WelcomeUser onClick={() => handleClick("Aryan")} onMouseEnter={handleHover} />
  )
}

function WelcomeUser(props) {
  return (
    <>
      <button onClick={props.onClick}>Click me</button>
      <p onMouseEnter={props.onMouseEnter}>Hover on me</p>
    </>
  )
}

export default Four