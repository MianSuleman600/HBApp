import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { UserButton } from '@clerk/clerk-react' // ✅ fixed typo

function Navbar() {
  return (
    <div className='flex justify-between items-center bg-white px-4 md:px-8 border-b border-gray-300 py-4 transition-all duration-300'>
      <Link to='/'>
        <img src={assets.logo} alt="logo" className='h-9 invert opacity-300' />
      </Link>
      <UserButton />
    </div>
  )
}

export default Navbar
