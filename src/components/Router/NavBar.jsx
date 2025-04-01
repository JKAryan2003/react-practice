import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          {/* <a href="/">Home</a> */}
          <Link to='/'>Home</Link>
        </li>
        <li>
          {/* <a href="/four1">Four 1</a> */}
          <Link to='/four1'>Four 1</Link>
        </li>
        <li>
          {/* <a href="/four2">Four 2</a> */}
          <Link to='/four2'>Four 2</Link>
        </li>
        <li>
          {/* <a href="/four3">Four 3</a> */}
          <Link to='/four3'>Four 3</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar