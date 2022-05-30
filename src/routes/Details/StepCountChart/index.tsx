import dayjs from 'dayjs'

import stepCountData from 'data/stepCount.json'
import styles from './stepCountChart.module.scss'
import { useState } from 'react'
import SearchDate from 'components/SearchDate'
import Chart from './Chart'
import NeedMoreDate from '../NeedForDate'

interface IProps {
  id: number
}

const StepCountChart = ({ id }: IProps) => {
  const [date, setDate] = useState({ start: '', end: '' })
  const rawData = stepCountData.filter((item) => item.id === id)
  const chartData = [...rawData[0].step_count].reverse().filter((item) => {
    if (date.start === '') return true
    return (
      dayjs(date.start).unix() <= dayjs(item.crt_ymdt).unix() &&
      dayjs(date.end).unix() + 86400 > dayjs(item.crt_ymdt).unix()
    )
  })
  return (
    <div className={styles.stepCountContainer}>
      <p className={styles.title}>걸음수</p>
      {chartData.length === 0 ? <NeedMoreDate /> : <Chart stepCountData={chartData} date={date} />}
      <SearchDate date={date} setDate={setDate} />
    </div>
  )
}

export default StepCountChart
