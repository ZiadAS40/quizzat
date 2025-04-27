import React from 'react'
import { NavLink } from 'react-router-dom'
import Dashboardicon from '/si_dashboard-fill.svg?url'
import QuizIcon from '/material-symbols_quiz.svg?url'
import DashboardiconWhite from '/si_dashboard-fill-white.svg?url'

const ExpandedSidebar = () => {
  return (
<>
<nav className='w-full' >
            <ul  >
                <li className="tab">
                    <NavLink to="/" end className={({isActive, isPending, isTransitioning})=>`
                    ${ isPending && "animate-pulse"}
                       ${isTransitioning && "scale-105 transition-transform duration-300"}
                       ${isActive?'bg-[#121212] text-white':"bg-[#F4ECE5] text-black"} 
                       flex justify-start items-center tab `}> 
{({ isActive }) => (
    <>
    <img 
      src={isActive ? DashboardiconWhite : Dashboardicon} 
      alt="Dashboard Icon" 
      className="h-6 w-6" 
    />
    <p className={`ps-3 `}>
    Overview
    </p>
    </>  
  )}                  
  
    </NavLink>
                </li>
                <li className='tab'>
                <NavLink to="dashboard" className={({isActive, isPending, isTransitioning})=>`
                    ${ isPending && "animate-pulse"}
                        ${isTransitioning && "scale-105 transition-transform duration-300"}
                        ${isActive?'bg-[#121212] text-white':"bg-[#F4ECE5] text-black"}
                        flex justify-start items-center tab`}> 
                    <img src={QuizIcon} alt="icon" className="h-6 w-6" />                    
                    <p className={``}>Dashboard</p></NavLink>
                </li>
            </ul>
        </nav>
</>
  )
}

export default ExpandedSidebar