import React from 'react'
import {
  RiCloudyLine,
  RiContrastDropFill,
  RiEqualLine,
  RiEyeLine,
  RiFocusLine,
  RiMistLine,
  RiMoonFill,
  RiSignalTowerFill,
  RiSunFill,
  RiSunLine,
  RiTempColdLine,
} from 'react-icons/ri'

function WeatherCard() {
  return (
    <div className="p-6 bg-dark-200 rounded-xl shadow">
      {/* weather title */}
      <div className="flex justify-between">
        <div>
          <h1 className="text-white font-bold text-lg">Weather</h1>
          <span className="text-dark-0 text-xs">WED 23.07</span>
        </div>
        <div className="text-green-400 mt-2">
          <RiEqualLine size={25} />
        </div>
      </div>
      {/* 52 celcius */}
      <div className="flex items-end justify-between mt-3">
        <div className="flex items-center text-dark-0 space-x-2">
          <RiTempColdLine />
          <RiSunFill className="text-dark-50" />
          <RiCloudyLine />
          <RiMoonFill />
        </div>
        <div className="text-white flex">
          <div className="text-3xl leading-none">52</div>
          <span className="text-sm">°C</span>
        </div>
      </div>
      {/* temperature list */}
      <div className="text-white flex justify-between mt-12 text-sm">
        <div>17°C</div>
        <div>23°C</div>
        <div>27°C</div>
        <div>32°C</div>
        <div>36°C</div>
      </div>
      {/* bar */}
      <div className="mt-6">
        <div className="h-1 rounded-md w-full bg-white">
          <div className="h-1 rounded-md w-8/12 bg-dark-50"></div>
        </div>
      </div>
      {/* details */}
      <div className="mt-8">
        <div className="text-gray-400 text-xs font-semibold mb-2">DETAILS</div>
        <div className="p-2 grid grid-cols-3 gap-x-3 gap-y-6 text-gray-200">
          <div className="bg-dark-150 grid place-content-center text-center px-3 py-7 rounded">
            <div className="mx-auto">
              <RiContrastDropFill size={30} />
            </div>
            <div className="text-xs text-gray-400 my-2">Humidity</div>
            <div>14%</div>
          </div>
          <div className="bg-dark-150 grid place-content-center text-center px-3 py-7 rounded">
            <div className="mx-auto">
              <RiMistLine size={30} />
            </div>
            <div className="text-xs text-gray-400 my-2">Wind</div>
            <div>5 km/h</div>
          </div>
          <div className="bg-dark-150 grid place-content-center text-center px-3 py-7 rounded">
            <div className="mx-auto">
              <RiSunLine size={30} />
            </div>
            <div className="text-xs text-gray-400 my-2">Feels like</div>
            <div>23&deg;</div>
          </div>
          <div className="bg-dark-150 grid place-content-center text-center px-3 py-7 rounded">
            <div className="mx-auto">
              <RiEyeLine size={30} />
            </div>
            <div className="text-xs text-gray-400 my-2">Visibility</div>
            <div>N/A</div>
          </div>
          <div className="bg-dark-150 grid place-content-center text-center px-3 py-7 rounded">
            <div className="mx-auto">
              <RiSignalTowerFill size={30} />
            </div>
            <div className="text-xs text-gray-400 my-2">Pressure</div>
            <div>24.25 in</div>
          </div>
          <div className="bg-dark-150 grid place-content-center text-center px-3 py-7 rounded">
            <div className="mx-auto">
              <RiFocusLine size={30} />
            </div>
            <div className="text-xs text-gray-400 my-2">Dew Point</div>
            <div>11&deg;</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
