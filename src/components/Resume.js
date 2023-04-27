import React from 'react'
import mattCV from "../images/mattCV.pdf"


const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = mattCV ;
    link.download = 'mattResume.pdf';
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div>
       <button onClick={handleDownload} className=" p-2 px-4 border-[1px] border-black dark:border-[white] rounded hover:bg-transparent">
              Resume
            </button>
    </div>
  )
}

export default Resume
