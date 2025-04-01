import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css' 
const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          {/* <a href="/">Home</a> */}
          {/* <Link to='/'>Home</Link> */}
          <NavLink to='/' className={({isActive}) => isActive ? "active-link" : ""}> Home</NavLink>

        </li>
        <li>
          {/* <a href="/four1">Four 1</a> */}
          {/* <Link to='/four1'>Four 1</Link> */}
          <NavLink to='/four1' className={({isActive}) => isActive ? "active-link" : ""}>Four 1</NavLink>
        </li>
        <li>
          {/* <a href="/four2">Four 2</a> */}
          {/* <Link to='/four2'>Four 2</Link> */}
          <NavLink to='/four2' className={({isActive}) => isActive ? "active-link" : ""}>Four 2</NavLink>
        </li>
        <li>
          {/* <a href="/four3">Four 3</a> */}
          {/* <Link to='/four3'>Four 3</Link> */}
          <NavLink to='/four3' className={({isActive}) => isActive ? "active-link" : ""}>Four 3</NavLink>
        </li>
        <li>
          {/* <a href="/four3">Four 3</a> */}
          {/* <Link to='/four3'>Four 3</Link> */}
          <NavLink to='/student/5' className={({isActive}) => isActive ? "active-link" : ""}>Params</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavBar