import { useState } from 'react'
import dayjs from 'dayjs'

import heartRateData from 'data/heartRate.json'

import SearchDate from 'components/SearchDate'
import NeedMoreDate from '../NeedForDate'
import Chart from './Chart'

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

  const chartResult =
    filteredData.length === 0 || (filteredData.length === 1 && date.start !== date.end) ? (
      <NeedMoreDate title='정확한 날짜 설정을 해주세요.' />
    ) : (
      <Chart heartRateData={filteredData} date={date} />
    )

  return (
    <div className={styles.heartRateContainer}>
      <p className={styles.title}>심박수</p>
      {chartResult}
      <SearchDate date={date} setDate={setDate} />
    </div>
  )
}
export default HearRateChart
