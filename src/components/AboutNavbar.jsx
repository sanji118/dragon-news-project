import React from 'react'
import swimming from '../assets/image/swimming.png';
import classroom from '../assets/image/class.png';
import playground from '../assets/image/playground.png';
import bg from '../assets/image/bg.png'
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';

const AboutNavbar = () => {
  return (
    <div>
        <SocialLogin></SocialLogin>
        <FindUs></FindUs>
        <div className='bg-[#F3F3F3] my-5'>
            <h2 className='text-2xl font-bold p-5'>Q-Zone</h2>
            <div className='flex flex-col gap-5'>
                <div className='border-2 border-dashed border-gray-300 p-2 mx-auto'><img src={swimming} alt="Swimming" /></div>
                <div className='border-2 border-dashed border-gray-300 p-2 mx-auto'><img src={classroom} alt='class' /></div>
                <div className='border-2 border-dashed border-gray-300 p-2 mx-auto'><img src={playground} alt="Play_Ground" /></div>
            </div>
        </div>
        <div className='my-5'><img src={bg} alt="" /></div>
    </div>
  )
}

export default AboutNavbar