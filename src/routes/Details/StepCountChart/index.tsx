import dayjs from 'dayjs'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryContainer } from 'victory'

import stepCountData from 'data/stepCount.json'
import styles from './stepCountChart.module.scss'
import { useState } from 'react'
import SearchDate from 'components/SearchDate'

interface IProps {
  id: number
}

const StepCountChart = ({ id }: IProps) => {
  const [date, setDate] = useState({ start: '', end: '' })
  let sumStepCount = 0
  const rawData = stepCountData.filter((item) => item.id === id)
  const chartData = [...rawData[0].step_count].reverse().filter((item) => {
    if (date.start === '') return true
    return (
      dayjs(date.start).unix() <= dayjs(item.crt_ymdt).unix() &&
      dayjs(date.end).unix() + 86400 > dayjs(item.crt_ymdt).unix()
    )
  })
  const data = chartData.map((item) => {
    sumStepCount += item.steps
    return {
      x: item.crt_ymdt,
      y: item.steps,
    }
  })
  return (
    <div className={styles.stepCountContainer}>
      <p className={styles.title}>걸음수</p>
      <VictoryChart
        domainPadding={10}
        containerComponent={<VictoryContainer responsive={false} width={400} height={300} />}
      >
        <VictoryAxis dependentAxis />
        <VictoryAxis
          crossAxis
          scale={{ x: 'time' }}
          style={{ tickLabels: { angle: 0, textAnchor: 'start' } }}
          fixLabelOverlap
          tickFormat={() => ''}
          domainPadding={{ y: 10 }}
        />
        <VictoryBar data={data} />
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
        <p>평균 {Math.floor(sumStepCount / data.length).toLocaleString()} 걸음</p>
      </div>
      <SearchDate date={date} setDate={setDate} />
    </div>
  )
}

export default StepCountChart
