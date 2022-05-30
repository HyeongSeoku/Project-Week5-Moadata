import dayjs from 'dayjs'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryContainer } from 'victory'

import styles from './stepCountChart.module.scss'

interface IProps {
  stepCountData: {
    date: string
    data: {
      seq: number
      member_seq: number
      steps: number
      minutes: number
      distance: number
      calorie: number
      crt_ymdt: string
    }[]
  }[]
  date: {
    start: string
    end: string
  }
}

const Chart = ({ stepCountData, date }: IProps) => {
  let sumStepCount = 0
  const makeData = () => {
    if (date.start && date.start === date.end) {
      const newArr = [...stepCountData[0].data].reverse()
      return newArr.map((item) => {
        sumStepCount += item.steps
        return { x: `   ${dayjs(item.crt_ymdt).format('H:mm')}   `, y: item.steps }
      })
    }
    return stepCountData.map((dateItem) => {
      sumStepCount += dateItem.data[0].steps
      return { x: dayjs(dateItem.date).format('MM-DD'), y: dateItem.data[0].steps }
    })
  }

  const chartData = makeData()
  const barWidth = date.start && date.start === date.end ? 1 : 20
  const axisPadding = date.start && date.start === date.end ? 10 : 100
  const summaryString =
    date.start && date.start === date.end
      ? stepCountData[0].data[0].steps.toLocaleString()
      : `평균 ${Math.floor(sumStepCount / stepCountData.length).toLocaleString()}`

  return (
    <div className={styles.chartContainer}>
      <VictoryChart
        padding={60}
        domainPadding={{ y: 50, x: axisPadding }}
        width={500}
        height={300}
        containerComponent={<VictoryContainer responsive={false} />}
      >
        <VictoryAxis dependentAxis />
        <VictoryAxis fixLabelOverlap />
        <VictoryBar
          data={chartData}
          style={{
            data: { fill: '#586cf5', width: barWidth },
          }}
        />
      </VictoryChart>
      <div className={styles.summary}>
        {date.start === '' ? (
          <p className={styles.date}>전체 데이터</p>
        ) : (
          <p>
            {dayjs(date.start).format('YYYY')}년 {dayjs(date.start).format('M')}월 {dayjs(date.start).format('D')}일
            {date.end !== date.start
              ? ` ~ ${dayjs(date.end).format('YYYY')}년 ${dayjs(date.end).format('M')}월 ${dayjs(date.end).format(
                  'D'
                )}일`
              : ''}
          </p>
        )}
        <p className={styles.avg}>{summaryString} 걸음</p>
      </div>
    </div>
  )
}

export default Chart
