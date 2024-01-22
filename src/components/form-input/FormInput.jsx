
import React from 'react'
import './FormInput.scss'
const FormInput = ({handlechange, label,...otherProps}) => {
  return (
    <div className='group'>
        <input className='form-input' type="text" onChange={handlechange} {...otherProps}/>
        {
            label ?
            <label className={`${otherProps.value.length? 'shrink':''} form-input-label`}>
                {label}
            </label>:null
        }
      
    </div>
  )
}

export default FormInput
