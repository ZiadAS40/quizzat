import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home/Home';
const router = createBrowserRouter([
  { path: "/", Component: Home },
]);
function App() {

  return (
   
    <RouterProvider router={router}>
      
      </RouterProvider>
   
  )
}

export default App
