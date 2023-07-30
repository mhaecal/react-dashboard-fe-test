import React from 'react'
import {
  RiDashboardFill,
  RiDraggable,
  RiFileCopyFill,
  RiLayout5Fill,
  RiLayoutBottom2Fill,
  RiLayoutTop2Line,
  RiListCheck,
  RiMailFill,
  RiMapPinAddFill,
  RiPencilFill,
  RiToggleFill,
} from 'react-icons/ri'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  const handleActiveClass = ({ isActive }) => {
    if (isActive) {
      return 'flex items-center py-2 px-5 text-white hover:bg-dark-300 group'
    } else {
      return 'flex items-center py-2 px-5 text-dark-0 hover:bg-dark-300 group'
    }
  }

  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full lg:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full py-4 overflow-y-auto bg-dark-400">
        <div className="px-5 mb-5 mt-2">
          <div className="bg-black h-20 w-full"></div>
        </div>
        <div className="space-y-2 font-medium text-sm">
          <NavLink to="/" className={handleActiveClass}>
            <RiDashboardFill className="h-6 w-6" />
            <span className="ml-4">Dashboard</span>
          </NavLink>
          <NavLink to="/forms" className={handleActiveClass}>
            <RiLayout5Fill className="h-6 w-6" />
            <span className="ml-4">Forms</span>
          </NavLink>
          <NavLink to="/inbox" className={handleActiveClass}>
            <RiMailFill className="h-6 w-6" />
            <span className="ml-4">Inbox</span>
          </NavLink>
          <a
            href="#"
            className="flex items-center py-2 px-5 text-dark-0 hover:bg-dark-300 group"
          >
            <RiFileCopyFill className="h-6 w-6" />
            <span className="ml-4">Stepper</span>
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-5 text-dark-0 hover:bg-dark-300 group"
          >
            <RiPencilFill className="h-6 w-6" />
            <span className="ml-4">Ui Elements</span>
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-5 text-dark-0 hover:bg-dark-300 group"
          >
            <RiLayout5Fill className="h-6 w-6" />
            <span className="ml-4">Layouts</span>
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-5 text-dark-0 hover:bg-dark-300 group"
          >
            <RiDraggable className="h-6 w-6" />
            <span className="ml-4">Icons</span>
          </a>
        </div>
        <div className="uppercase text-dark-0 my-4 text-xs pl-4">Layout</div>
        <div className="space-y-2 font-medium text-sm">
          <a
            href="#"
            className="flex items-center py-2 px-5 text-dark-0 hover:bg-dark-300 group"
          >
            <RiLayoutBottom2Fill className="h-6 w-6" />
            <span className="ml-4">Subheaders</span>
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-5 text-dark-0 hover:bg-dark-300 group"
          >
            <RiListCheck className="h-6 w-6" />
            <span className="ml-4">Builder</span>
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-5 text-dark-0 hover:bg-dark-300 group"
          >
            <RiToggleFill className="h-6 w-6" />
            <span className="ml-4">General</span>
          </a>
        </div>
        <div className="uppercase text-dark-0 my-4 text-xs pl-4">
          Components
        </div>
        <div className="space-y-2 font-medium text-sm">
          <a
            href="#"
            className="flex items-center py-2 px-5 text-dark-0 hover:bg-dark-300 group"
          >
            <RiLayoutTop2Line className="h-6 w-6" />
            <span className="ml-4">Tables</span>
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-5 text-dark-0 hover:bg-dark-300 group"
          >
            <RiMapPinAddFill className="h-6 w-6" />
            <span className="ml-4">Maps</span>
          </a>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
