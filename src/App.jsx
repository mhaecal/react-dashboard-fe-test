import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="bg-gradient-to-r from-dark-100 to-dark-200">
      <Navbar />
      <Sidebar />
      <div className="px-5 py-8 lg:ml-64 min-h-screen">
        <Outlet />
      </div>
    </div>
  )
}

export default App
