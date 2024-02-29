import React from 'react'
import './buttonStyles.css'

function Button({ children, handleClick, ...props}) {
  return (
    <button className='btn-submit' onClick={handleClick} {...props}>
        {children}
    </button>
  )
}

export default Button
