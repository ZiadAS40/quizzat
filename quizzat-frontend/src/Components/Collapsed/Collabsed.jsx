import React from 'react'
import { NavLink } from 'react-router-dom'
import Dashboardicon from '/si_dashboard-fill.svg?url'
import DashboardiconWhite from '/si_dashboard-fill-white.svg?url'

import QuizIcon from '/material-symbols_quiz.svg?url'
const Collabsed = () => {
  return (
   <>
    <nav >
               <ul className=" flex gap-4 flex-col justify-center items-center">
                   <li className="">
                       <NavLink to="/" end className={({isActive, isPending, isTransitioning})=>`
                       ${ isPending && "animate-pulse"}
                           ${isTransitioning && "scale-105 transition-transform duration-300"}
                          ${ isActive?'bg-[#121212] text-white':"bg-[#F4ECE5] text-black"} 
                          flex justify-center items-center rounded-full h-12 w-12`}> 
{({ isActive }) => (
    <img 
      src={isActive ? DashboardiconWhite : Dashboardicon} 
      alt="Dashboard Icon" 
      className="h-6 w-6" 
    />
  )}

                 </NavLink>
                   </li>
                   <li className=''>
                   <NavLink to="dashboard" end className={({isActive, isPending, isTransitioning})=>`
                       ${ isPending && "animate-pulse"}
                          ${isTransitioning && "scale-105 transition-transform duration-300"}
                          ${isActive?'bg-[#121212] text-white':"bg-[#F4ECE5] text-black"}  
                           rounded-full h-12 w-12 flex justify-center items-center `}> 
                       <img src={QuizIcon} alt="icon" className="h-6 w-6" />                    
                      
                       </NavLink>
                   </li>
               </ul>
           </nav>
   </>
  )
}

export default Collabsed