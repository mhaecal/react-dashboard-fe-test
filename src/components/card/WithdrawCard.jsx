import React from 'react'
import {
  RiArrowLeftRightFill,
  RiBankCard2Line,
  RiDownloadLine,
  RiFileFill,
} from 'react-icons/ri'

function WithdrawCard() {
  return (
    <div className="p-6 bg-dark-200 rounded-xl">
      <div className="flex space-x-3 items-center">
        <div className="w-1/2">
          <div className="font-semibold text-white text-lg">Withdraw Funds</div>
          <div className="text-dark-0 text-xs">TODAY</div>
        </div>
        <div className="w-1/2">
          <button className="w-full py-2 px-3 rounded-md text-white flex items-center justify-center bg-dark-50 text-sm font-semibold">
            <span className="mr-2">
              <RiDownloadLine size={15} />
            </span>
            Withdraw
          </button>
        </div>
      </div>
      <div className="mt-5 flex justify-between pb-5 border-b-2 border-dark-0 space-x-2">
        <div className="flex items-center text-dark-0">
          <div>
            <RiBankCard2Line size={18} style={{ marginRight: '10px' }} />
          </div>
          <div className="text-sm">Amount:</div>
        </div>
        <div className="text-white">$1,000,000</div>
      </div>
      <div className="mt-5 flex justify-between pb-5 border-b-2 border-dark-0 space-x-2">
        <div className="flex items-center text-dark-0">
          <div>
            <RiFileFill size={18} style={{ marginRight: '10px' }} />
          </div>
          <div className="text-sm">Confirmation N:</div>
        </div>
        <div className="text-white">394849304832456</div>
      </div>
    </div>
  )
}

export default WithdrawCard
