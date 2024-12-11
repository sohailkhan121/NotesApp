import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/navbar.css'
const Navbar = () => {
  return (
    <div className='navbar flex flex-row gap-5 place-content-evenly'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/paste">All Pastes</NavLink>
    </div>
  )
}

export default Navbar