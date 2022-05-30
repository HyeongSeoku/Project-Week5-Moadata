import dayjs from 'dayjs'

import styles from './heartRateChart.module.scss'
import heartRateData from 'data/heartRate.json'
import { useState } from 'react'
import SearchDate from 'components/SearchDate'
import Chart from './Chart'
import NeedMoreDate from '../NeedForDate'

interface IProps {
  id: number
}
const HearRateChart = ({ id }: IProps) => {
  const [date, setDate] = useState({ start: '', end: '' })
  const rawData = heartRateData.filter((item) => item.id === id)
  const chartData = [...rawData[0].heart_rate].reverse().filter((item) => {
    if (date.start === '') return true
    return (
      dayjs(date.start).unix() <= dayjs(item.crt_ymdt).unix() &&
      dayjs(date.end).unix() + 86400 > dayjs(item.crt_ymdt).unix()
    )
  })
  return (
    <div className={styles.heartRateContainer}>
      <p className={styles.title}>심박수</p>
      {chartData.length === 0 ? <NeedMoreDate /> : <Chart heartRateData={chartData} date={date} />}
      <SearchDate date={date} setDate={setDate} />
    </div>
  )
}
export default HearRateChart
