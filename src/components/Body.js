import React from 'react'
import ProfilePicture from './ProfilePicture'
import './Body.css'
import { Link } from 'react-router-dom'
import mattCV from "../images/matthewCv.pdf"

const Body = () => {
  const handleDownloadHome = () => {
    const link = document.createElement('a');
    link.href = mattCV;
    link.download = 'mattResume.pdf';
    document.body.appendChild(link);
    link.click();
  };
  return (
    <div className=' pt-8 md:flex md:pt-36 py-8 px-12 justify-between max-w-[1300px] mx-auto'>
        <div>
        <ProfilePicture/>
        <h4 className='text-[1.5rem] font-[600]'>Hi <span className='wave'>👋</span> my name is</h4>
        <h1 className='text-[2.5rem] md:text-[4rem] font-[700] '>Egbedokun Matthew.</h1>
        </div>
        <div className='pt-8'>
            <Link to='/about'><h1 className='underline decoration-wavy text-[2.1rem] md:text-[3rem] font-[500] text-end'>Web Developer</h1></Link>
            <a onClick={handleDownloadHome}><h1 className=' underline decoration-wavy text-[2.1rem] md:text-[3rem] font-[500] text-end hover:cursor-pointer'>Resume</h1></a>
            <h1 className='text-[2.1rem] md:text-[3rem] font-[500] text-end'>Book Worm</h1>
            <h1 className='text-[2.1rem] md:text-[3rem] font-[500] text-end'>Fitness Enthusiast</h1>
        </div>
    </div>
  )
}

export default Body