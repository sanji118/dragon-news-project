import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

  const links = <>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to='/about '>About</NavLink>
    </li>
    <li>
      <NavLink to='/career'>Career</NavLink>
    </li>
  </>
  
  return (
    <div className='navbar-end w-full'>
      <div>
        <ul className='opacity-80 flex items-center gap-5'>
          {links}
        </ul>
      </div>
      <div className='navbar-end gap-6'>
        <div>
          <FaUserCircle className='text-4xl'></FaUserCircle>
        </div>
        <div>
          <button className='btn'>
            <Link to="/auth/login">Login</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar