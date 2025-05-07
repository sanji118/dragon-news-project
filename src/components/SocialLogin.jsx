import React from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'

const SocialLogin = () => {
  return (
    <div>
        <h2 className='font-bold text-xl text-[#403F3F] py-5'>Login With</h2>
        <div className='flex flex-col gap-2 text-sm'>
            <button className='text-blue-500 border border-solid border-blue-500 p-3 rounded-lg flex items-center gap-2 justify-center'>
                <FaGoogle></FaGoogle><p >  Login with Google</p>
            </button>
            <button className='text-gray-600 border border-solid border-gray-600 p-3 rounded-lg flex items-center justify-center gap-2'>
                <FaGithub></FaGithub>
                <p>  Login with Github</p>
            </button>
        </div>
    </div>
  )
}

export default SocialLogin