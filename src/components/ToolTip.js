import React from 'react'

const ToolTip = (props) => {
  return (
    <div className='rounded-lg -top-10 -left-5 w-[80px] text-white text-center p-1 hidden  bg-opacity-90 bg-[#0c0c0c]  text-[14px] text-red border-2 border-[#fff] absolute group-hover:block '>
      {props.title}
    </div>
  )
}

export default ToolTip
