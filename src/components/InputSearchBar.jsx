import React from 'react'
import { RiSearchLine } from 'react-icons/ri'

function InputSearchBar() {
  return (
    <form className="flex items-center ml-5">
      <input
        type="text"
        id="simple-search"
        className="mr-2 w-64 placeholder:text-dark-0 border-0 border-b-2 border-dark-0 bg-transparent py-2 pl-0 focus:ring-0 focus:border-dark-0 text-sm"
        placeholder="Search..."
      />
      <button type="submit">
        <RiSearchLine className="w-6 h-6" />
      </button>
    </form>
  )
}

export default InputSearchBar
