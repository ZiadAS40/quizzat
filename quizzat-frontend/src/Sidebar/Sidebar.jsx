import React, {  useState } from 'react'

import Collabsed from '../Components/Collapsed/Collabsed'
import ExpandedSidebar from '../Components/ExpandedSidebar/ExpandedSidebar'
const Sidebar = () => {
    const [isToggled, setIsToggled] = useState(false)
    function handleToggle(){
        setIsToggled(prev=>!prev)
        console.log(isToggled)
    }
  return (
    <header className='bg-[#F4ECE5] rounded-md h-screen'>
        <h1 className='cursor-pointer  text-start p-2' onClick={handleToggle}>Study DUO</h1>
        {isToggled? <div className={` flex flex-col items-start  ${isToggled&& "animate-growWidth"} `}>
            <ExpandedSidebar/>

</div>:<Collabsed/> }
      
    </header>
  )
}

export default Sidebar