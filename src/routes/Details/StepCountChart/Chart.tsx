import dayjs from 'dayjs'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryContainer } from 'victory'

import styles from './stepCountChart.module.scss'

interface IProps {
  stepCountData: {
    seq: number
    member_seq: number
    steps: number
    minutes: number
    distance: number
    calorie: number
    crt_ymdt: string
  }[]
  date: {
    start: string
    end: string
  }
}

const Chart = ({ stepCountData, date }: IProps) => {
  let sumStepCount = 0
  const data = stepCountData.map((item) => {
    sumStepCount += item.steps
    return {
      x: item.crt_ymdt,
      y: item.steps,
    }
  })
  return (
    <div className={styles.chartContainer}>
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
          <p className={styles.date}>모든 날짜 선택됨</p>
        ) : (
          <p>
            {dayjs(date.start).format('YYYY')}년 {dayjs(date.start).format('M')}월 {dayjs(date.start).format('D')}일
            {date.end !== date.start
              ? ` ~ ${dayjs(date.start).format('YYYY')}년 ${dayjs(date.start).format('M')}월 ${dayjs(date.start).format(
                  'D'
                )}일`
              : ''}
          </p>
        )}
        <p className={styles.avg}>평균 {Math.floor(sumStepCount / data.length).toLocaleString()} 걸음</p>
      </div>
    </div>
  )
}

export default Chart
