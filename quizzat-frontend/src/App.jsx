import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home/Home';
import Layout from './Layout/Layout';
import Dashboard from './Dashboard/Dashboard';

// Layout 
// nested routes
//dynamic routing
const router = createBrowserRouter([
  { Component:Layout,
    children:[
      {index:true, Component: Home},
      {path:"dashboard",Component: Dashboard}
    ]
  }
  
])
function App() {

  return (
  <RouterProvider router={router}/>
   
  )
}

export default App
