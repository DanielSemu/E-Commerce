import React from 'react'
import './homepage.style.scss'
import Directory from '../../components/directory/directory.component'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='homepage'>
      <Link to={'/shop'}> <h1>Shop</h1></Link>
        <Directory/>
    </div>
  )
}

export default Homepage
