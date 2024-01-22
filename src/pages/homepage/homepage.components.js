import React from 'react'
import './homepage.style.scss'
import Directory from '../../components/directory/directory.component'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='homepage'>
        <Directory/>
    </div>
  )
}

export default Homepage
