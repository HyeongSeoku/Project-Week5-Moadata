import { useState } from 'react'
import dayjs from 'dayjs'

import heartRateData from 'data/heartRate.json'

import SearchDate from 'components/SearchDate'
import Chart from './Chart'
import NeedMoreDate from '../NeedForDate'
import styles from './heartRateChart.module.scss'

interface IProps {
  id: number
}
const HearRateChart = ({ id }: IProps) => {
  const [date, setDate] = useState({ start: '', end: '' })
  const rawData = heartRateData.filter((item) => item.id === id)[0]
  const filteredData = rawData.heartRate.filter((dayItem) => {
    if (date.start === '') return true
    return (
      dayjs(date.start).unix() <= dayjs(dayItem.date).unix() && dayjs(date.end).unix() >= dayjs(dayItem.date).unix()
    )
  })
  return (
    <div className={styles.heartRateContainer}>
      <p className={styles.title}>심박수</p>
      {filteredData.length === 0 ? <NeedMoreDate /> : <Chart heartRateData={filteredData} date={date} />}
      <SearchDate date={date} setDate={setDate} />
    </div>
  )
}
export default HearRateChart
