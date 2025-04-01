import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/four1')
  }
  return (
    <div>Home
      <button onClick={handleClick}>
        Four 1 Page
      </button>
    </div>
  )
}

export default Home