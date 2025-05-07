import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const AuthLayout = () => {
  return (
    <div className='py-6 mx-auto h-full'>
        <header>
            <Navbar></Navbar>
        </header>
        <Outlet></Outlet>
    </div>
  )
}

export default AuthLayout