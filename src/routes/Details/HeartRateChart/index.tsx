import dayjs from 'dayjs'
import { VictoryAxis, VictoryChart, VictoryContainer, VictoryLine } from 'victory'

import styles from './heartRateChart.module.scss'
import heartRateData from 'data/heartRate.json'
import { useState } from 'react'
import SearchDate from 'components/SearchDate'

interface IProps {
  id: number
}
const HearRateChart = ({ id }: IProps) => {
  const [date, setDate] = useState({ start: '', end: '' })
  const rawData = heartRateData.filter((item) => item.id === id)
  let sumHeatRate = 0
  const chartData = [...rawData[0].heart_rate].reverse().filter((item) => {
    if (date.start === '') return true
    return (
      dayjs(date.start).unix() <= dayjs(item.crt_ymdt).unix() &&
      dayjs(date.end).unix() + 86400 > dayjs(item.crt_ymdt).unix()
    )
  })
  const data = chartData.map((item) => {
    sumHeatRate += item.avg_beat
    return {
      x: item.crt_ymdt,
      y: item.avg_beat,
    }
  })
  return (
    <div className={styles.heartRateContainer}>
      <p className={styles.title}>심박수</p>
      <VictoryChart
        domainPadding={10}
        containerComponent={<VictoryContainer responsive={false} width={400} height={300} />}
      >
        <VictoryAxis dependentAxis />
        <VictoryAxis crossAxis scale={{ x: 'time' }} fixLabelOverlap tickFormat={() => ''} domainPadding={{ y: 10 }} />
        <VictoryLine data={data} />
      </VictoryChart>
      <div className={styles.summary}>
        {date.start === '' ? (
          <p>모든 날짜 선택됨</p>
        ) : (
          <p>
            {date.start}
            {date.end !== date.start ? `-${date.end}` : ''}
          </p>
        )}
        <p>평균 {Math.floor(data.length > 0 ? sumHeatRate / data.length : 0).toLocaleString()} bpm</p>
      </div>
      <SearchDate date={date} setDate={setDate} />
    </div>
  )
}
export default HearRateChart
