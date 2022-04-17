import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='error'>
      <div className='container error--contain'>
        <p>404</p>
        <p>Page Not Found</p>
        <Link to='/'>Go Home</Link>
      </div>
    </div>
  )
}

export default Error