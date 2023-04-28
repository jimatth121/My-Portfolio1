import React from 'react'
import mattCV from "../images/mattCV.pdf"


const Resume = ({onClick}) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = mattCV ;
    link.download = 'mattResume.pdf';
    document.body.appendChild(link);
    link.click();
    onClick()
  };

  return (
    <div>
       <button onClick={handleDownload} className=" py-1  px-2 border-[1px] border-black dark:border-[white] rounded hover:bg-transparent">
              Resume
            </button>
    </div>
  )
}

export default Resume
