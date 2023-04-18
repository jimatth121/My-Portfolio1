import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const SocialMedia = () => {
  return (
    <div className=' hidden md:flex flex-col p-8 gap-y-4'>
        <span className='h-[40px] border-l-[1px] border-[black] dark:border-[white] ml-3'></span>
      <GitHubIcon/>
      <TwitterIcon/>
      <LinkedInIcon/>
      <FacebookIcon/>
      <span className='h-[40px] border-l-[1px] border-[black] dark:border-[white] ml-3'></span>


    </div>
  )
}

export default SocialMedia
