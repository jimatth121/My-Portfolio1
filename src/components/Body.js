import React from 'react'
import ProfilePicture from './ProfilePicture'
import './Body.css'

const Body = () => {
  return (
    <div className=' pt-8 md:flex md:pt-36 py-8 px-12 justify-between max-w-[1300px] mx-auto'>
        <div>
        <ProfilePicture/>
        <h4 className='text-[1.5rem] font-[600]'>Hi <span className='wave'>👋</span> my name is</h4>
        <h1 className='text-[2.5rem] md:text-[4rem] font-[700] '>Egbedokun Matthew.</h1>
        </div>
        <div className='pt-8'>
            <a href='!#'><h1 className='underline decoration-wavy text-[2.1rem] md:text-[3rem] font-[600] text-end'>Web developer</h1></a>
            <a href='!#'><h1 className=' underline decoration-wavy text-[2.1rem] md:text-[3rem] font-[600] text-end'>Resume</h1></a>
            <h1 className='text-[2.1rem] md:text-[3rem] font-[600] text-end'>Book Worm</h1>
            <h1 className='text-[2.1rem] md:text-[3rem] font-[600] text-end'>Fitness Enthusiast</h1>
        </div>
    </div>
  )
}

export default Body