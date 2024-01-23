import React from 'react'
import './CustomButton.scss'
const CustomButton = ({children, isGoogleSignIn, type, ...otherProps}) => {
  const buttonClass = `custom-button ${type ? `${type}-button` : ''}`;
  return (
    <button className={`${isGoogleSignIn?'google-sign-in':''} custom-button`} {...otherProps}>
      {children}
    </button>
  )
}

export default CustomButton
