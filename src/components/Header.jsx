import React from 'react'
import logo from '../assets/image/logo.png'
import dayjs from 'dayjs'

const Header = () => {
  return (
    <div className='mx-auto py-8'>
        <header className='flex flex-col justify-center items-center gap-3 text-gray-500'>
            <img src={logo} />
            <p>Journalism Without Fear or Favour</p>
            <p>{dayjs().format('dddd, MMMM DD, YYYY')}</p>
        </header>
    </div>
  )
}

export default Header