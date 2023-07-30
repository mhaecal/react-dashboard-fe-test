import React from 'react'
import {
  RiArrowDropDownFill,
  RiListUnordered,
  RiMailLine,
  RiMenu2Fill,
  RiNotificationLine,
  RiSearchLine,
} from 'react-icons/ri'
import InputSearchBar from './InputSearchBar'

function Navbar() {
  return (
    <nav className="lg:ml-64 flex items-center justify-between text-dark-0 py-4 px-4 lg:px-6">
      <section className="flex">
        <button type="button" className="hidden lg:block">
          <RiListUnordered className="h-6 w-6" />
        </button>
        <button
          data-drawer-target="logo-sidebar"
          data-drawer-toggle="logo-sidebar"
          aria-controls="logo-sidebar"
          type="button"
          className="lg:hidden mr-4"
        >
          <RiMenu2Fill className="h-5 w-5" />
        </button>
        <div className="hidden md:block">
          <InputSearchBar />
        </div>
        <button type="button" className="md:hidden">
          <RiSearchLine className="w-5 h-5" />
        </button>
      </section>
      <section className="flex space-x-4 md:space-x-6 items-center">
        <button type="button" className="flex">
          <RiNotificationLine className="w-6 h-6" />
          <span className="text-white bg-red-500 w-4 h-4 rounded-full text-xs">
            5
          </span>
        </button>
        <button type="button" className="flex">
          <RiMailLine className="w-6 h-6" />
          <span className="text-white bg-dark-50 w-4 h-4 rounded-full text-xs">
            7
          </span>
        </button>
        <button type="button" className="flex items-center text-white text-sm">
          <div
            className="bg-cover bg-center h-6 w-6 rounded-full"
            style={{
              backgroundImage:
                'url(https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_the_United_Kingdom.png)',
            }}
          ></div>
          <span className="pl-2 hidden sm:block">English</span>
          <div className="hidden sm:block">
            <RiArrowDropDownFill size={25} />
          </div>
        </button>
        <button type="button" className="flex text-white items-center">
          <img
            src="https://thispersondoesnotexist.com/"
            alt="Profile"
            className="rounded-full w-8 h-8"
          />
          <div className="hidden sm:block">
            <RiArrowDropDownFill size={25} />
          </div>
        </button>
      </section>
    </nav>
  )
}

export default Navbar
