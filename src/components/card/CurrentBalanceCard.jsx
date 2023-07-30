import React from 'react'
import { RiArrowLeftRightFill } from 'react-icons/ri'

function CurrentBalanceCard() {
  return (
    <div className="p-6 bg-dark-200 rounded-xl">
      <div className="flex space-x-3 items-center">
        <div className="w-1/2">
          <h1 className="font-semibold text-white text-lg">Current Balance</h1>
          <span className="text-dark-0 text-xs">TODAY</span>
        </div>
        <div className="w-1/2">
          <button className="w-full py-2 px-3 rounded-md text-white flex items-center justify-center bg-dark-50 text-sm font-semibold">
            <span className="mr-2">
              <RiArrowLeftRightFill size={15} />
            </span>
            Send Money
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <div className="w-1/2">
          <div className="text-2xl lg:text-3xl text-white">$2438,55</div>
        </div>
        <div className="w-1/2 text-dark-0">
          <div className="flex justify-between items-center my-8 flex-wrap">
            <div className="text-sm">Income</div>
            <div className=" text-green-400">+ $3657</div>
          </div>
          <div className="flex justify-between items-center my-8 flex-wrap">
            <div className="text-sm">Expenses</div>
            <div className="text-red-500">- $3657</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentBalanceCard
