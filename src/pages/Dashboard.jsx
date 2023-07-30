import React from 'react'
import CurrentBalanceCard from '../components/card/CurrentBalanceCard'
import EarningCard from '../components/card/EarningCard'
import WeatherCard from '../components/card/WeatherCard'
import WithdrawCard from '../components/card/WithdrawCard'

function Dashboard() {
  return (
    <div className="grid md:grid-cols-12 gap-5">
      <section className="md:col-span-4">
        <WeatherCard />
      </section>
      <section className="md:col-span-8">
        <EarningCard />
        <div className="grid sm:grid-cols-2 gap-5">
          <CurrentBalanceCard />
          <WithdrawCard />
        </div>
      </section>
    </div>
  )
}

export default Dashboard
