import React, { useMemo } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
)

const createGradientColor = () => {
  const ctx = document.createElement('canvas').getContext('2d')
  const gradient = ctx.createLinearGradient(0, 0, 0, 400) // set the gradient direction and size
  gradient.addColorStop(0, 'rgb(70, 77, 155, 0.3)') // start color (at 0%)
  gradient.addColorStop(1, 'rgb(70, 77, 155, 1)') // end color (at 100%)
  return gradient
}

const options = {
  responsive: true,
  scales: {
    x: {
      ticks: {
        color: '#857eb6',
        weight: 'bold',
      },
    },
    y: {
      beginAtZero: false,
      // suggestedMin: 300,
      ticks: {
        color: '#857eb6',
        weight: 'bold',
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false,
}

export default function AreaChart({ data }) {
  const dataChart = useMemo(() => {
    return {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          fill: true,
          label: 'Earning',
          data: data,
          tension: 0.4,
          borderColor: 'transparent',
          backgroundColor: createGradientColor(),
          pointBackgroundColor: 'white',
        },
      ],
    }
  }, [data])

  return <Line options={options} data={dataChart} />
}
