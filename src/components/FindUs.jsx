import React from 'react';
import facebook from '../assets/image/fb.png'
import instagram from '../assets/image/instagram.png'
import twitter from '../assets/image/twitter.png';

const FindUs = () => {
  return (
    <div>
        <h2 className='text-2xl font-semibold py-5'>Find Us On</h2>
        <div className='opacity-70 *:w-full'>
            <button className='flex gap-3 p-3 border border-gray-300 rounded-t-lg'>
                <img src={facebook} alt="Facebook_icon"  className='rounded-full bg-gray-300 p-2 w-7 h-7'/>
                
                <p>Facebook</p>
            </button>
            <button className='flex gap-3 p-3 border border-gray-300'>
                <img src={twitter} alt="Twitter_icon" className='rounded-full bg-gray-300 p-2' />
                <p>Twitter</p>
            </button>
            <button className='flex gap-3 p-3 border border-gray-300 rounded-b-lg'>
                <img src={instagram} alt="Instagram_icon" className='rounded-full bg-gray-300 p-2' />
                <p>Instagram</p>
            </button>
        </div>
    </div>
  )
}

export default FindUs