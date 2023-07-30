import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AreaChart from '../AreaChart'

function EarningCard() {
  const [dataChart, setDataChart] = useState([])

  useEffect(() => {
    fetchData()
    const intervalId = setInterval(fetchData, 10000) // fetch data every 10s
    // clean up the interval to avoid memory leaks
    return () => clearInterval(intervalId)
  }, [])

  const fetchData = () => {
    const timestamp = Date.now()
    const url =
      'https://api.coingecko.com/api/v3/simple/price?ids=crypto-com-chain%2Cchiliz%2Cdogecoin%2Ctron%2Calgorand%2Cthe-graph&vs_currencies=idr&timestamp=' +
      timestamp
    axios
      .get(url)
      .then((res) => {
        const valuesArray = Object.values(res.data).map((item) => item.idr)
        setDataChart(valuesArray)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }

  return (
    <div className="bg-dark-200 p-6 rounded-xl shadow mb-5">
      <h1 className="font-semibold text-white text-lg">Earnings</h1>
      <span className="text-dark-0 text-xs">EARNINGS</span>
      <div className="md:p-6 grid sm:grid-cols-12 gap-10">
        <div className="sm:col-span-8 w-full overflow-x-auto max-h-36 mt-5">
          <AreaChart data={dataChart} />
        </div>
        <div className="sm:col-span-4 text-right">
          <div className="text-4xl text-white animate-pulse">
            <span className="text-[#ada4fa]">$</span>
            {dataChart.length ? dataChart[3] : 0}
          </div>
          <div className="text-end text-white my-4 text-sm">
            <span className="text-green-400">+ 42%</span> since last week
          </div>
          <div className="text-dark-0 text-sm">
            <button className="py-4 px-2 w-full bg-dark-150 mb-3">
              {dataChart.length ? Math.max(...dataChart) : 0} HIGH
            </button>
            <button className="py-4 px-2 w-full bg-dark-150">
              {dataChart.length ? Math.min(...dataChart) : 0} LOW
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EarningCard
