import { useState } from 'react'
import dayjs from 'dayjs'

import stepCountData from 'data/stepCount.json'

import SearchDate from 'components/SearchDate'
import Chart from './Chart'
import NeedMoreDate from '../NeedForDate'
import styles from './stepCountChart.module.scss'

interface IProps {
  id: number
}

const StepCountChart = ({ id }: IProps) => {
  const [date, setDate] = useState({ start: '', end: '' })
  const rawData = stepCountData.filter((item) => item.id === id)[0]
  const filteredData = rawData.stepCount.filter((dayItem) => {
    if (date.start === '') return true
    return (
      dayjs(date.start).unix() <= dayjs(dayItem.date).unix() && dayjs(date.end).unix() >= dayjs(dayItem.date).unix()
    )
  })
  return (
    <div className={styles.stepCountContainer}>
      <p className={styles.title}>걸음수</p>
      {filteredData.length === 0 ? (
        <NeedMoreDate title='정확한 날짜 설정을 해주세요.' />
      ) : (
        <Chart stepCountData={filteredData} date={date} />
      )}
      <SearchDate date={date} setDate={setDate} />
    </div>
  )
}

export default StepCountChart
