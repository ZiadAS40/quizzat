import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>Home

<h1 className='text-3xl font-bold underline'>Quizz app setup</h1>
<Outlet/>
    </div>
  )
}

export default Home