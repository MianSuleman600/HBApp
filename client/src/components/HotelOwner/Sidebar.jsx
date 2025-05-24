import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

function Sidebar() {
    const links = [
        { name: 'Dashboard', path: '/owner', icon: assets.dashboardIcon },
        { name: 'Add Rooms', path: '/owner/add-rooms',icon: assets.addIcon },
        { name: 'List Room', path: '/owner/list-room', icon: assets.listIcon },
       
    ]
  return (
    <div className='flex flex-col w-16 md:w-64 pt-4 transition-all duration-300 text-base border-r border-gray-300 h-full'>
    {links.map((link ,index) => (
       <NavLink to={link.path} key={index} end='/owner' className={({ isActive }) => `flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 ${isActive ? 'bg-gray-100' : ''}`}>
        <img src={link.icon} alt={link.name} className='h-6 w-6' />
        <span className='hidden md:block'>{link.name}</span>

       </NavLink>
      
    ))}

    </div>
  )
}

export default Sidebar