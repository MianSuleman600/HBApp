import React from 'react'
import { Outlet } from 'react-router-dom' 
import Navbar from '../../components/HotelOwner/Navbar'
import Sidebar from '../../components/HotelOwner/Sidebar'

function Layout() {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <div className='flex h-full'>
        <Sidebar />
        <div className='flex-1 p-4 md:px-10 h-full overflow-auto'>
          <Outlet /> 
        </div>
      </div>
    </div>
  )
}

export default Layout
