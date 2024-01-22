import React from 'react'
import './CustomButton.scss'
const CustomButton = ({children, type, ...otherProps}) => {
  const buttonClass = `custom-button ${type ? `${type}-button` : ''}`;
  return (
    <button className={buttonClass} {...otherProps}>
      {children}
    </button>
  )
}

export default CustomButton
