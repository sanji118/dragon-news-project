import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'

const LatestNews = () => {
  return (
    <div className='bg-[#F3F3F3] p-4 flex gap-5 items-center mb-12 font-semibold'>
        <div className='bg-[#D72050] py-2 px-6'>
            <p className='text-white  text-xl'>Latest</p>
        </div>
        <div>
            <Marquee className='space-x-10'>
                <Link>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                
            </Marquee>
        </div>
    </div>
  )
}

export default LatestNews