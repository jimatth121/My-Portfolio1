import React from 'react'
import './Button.css'
const Button = ({func, children}) => {
  return (
    <div className='button'>
        <button  onClick={func}>{children}</button>
    </div>
  )
}

export default Button