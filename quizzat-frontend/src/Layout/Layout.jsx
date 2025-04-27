import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'

const Layout = () => {
  return (
    <div className='container mx-auto p-5 min-h-screen'>
       <div className='flex gap-2  h-screen'>
        <div className='w-fit h-screen'>
            <Sidebar/>
        </div>
       <div className='w-full'>
       <Outlet/>
       </div>
    </div>
    </div>
   
  )
}

export default Layout