import { VictoryAxis, VictoryChart, VictoryContainer, VictoryLine, VictoryTheme } from 'victory'
import dayjs from 'dayjs'
import styles from './heartRateChart.module.scss'

interface IProps {
  heartRateData: {
    date: string
    data: {
      seq: number
      member_seq: number
      avg_beat: number
      crt_ymdt: string
    }[]
  }[]
  date: {
    start: string
    end: string
  }
}

const Chart = ({ heartRateData, date }: IProps) => {
  let sumHeartRate = 0
  let dataLength = 0
  const data = () => {
    if (date.start && date.start === date.end) {
      const newArr = [...heartRateData[0].data].reverse()
      return newArr.map((item) => {
        dataLength += 1
        sumHeartRate += item.avg_beat
        return { x: `   ${dayjs(item.crt_ymdt).format('H:mm')}   `, y: item.avg_beat }
      })
    }
    return heartRateData.map((dateItem) => {
      let daySumHeartRate = 0
      dateItem.data.forEach((item) => {
        dataLength += 1
        daySumHeartRate += item.avg_beat
      })
      sumHeartRate += daySumHeartRate
      return { x: dayjs(dateItem.date).format('MM-DD'), y: Math.floor(daySumHeartRate / dateItem.data.length) }
    })
  }

  const chartData = data()
  const axisPadding = date.start && date.start === date.end ? 10 : 100
  const avgStep = Math.floor(sumHeartRate / dataLength)

  return (
    <div className={styles.chartContainer}>
      <VictoryChart
        padding={60}
        domainPadding={{ y: 10, x: axisPadding }}
        width={500}
        height={300}
        containerComponent={<VictoryContainer responsive={false} />}
      >
        <VictoryAxis dependentAxis style={{ axis: { stroke: '#3a474e' }, tickLabels: { fill: '#94a2ad' } }} />
        <VictoryAxis fixLabelOverlap style={{ axis: { stroke: '#3a474e' }, tickLabels: { fill: '#94a2ad' } }} />
        <VictoryLine
          data={chartData}
          style={{
            data: { stroke: '#586cf5' },
          }}
          interpolation='natural'
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
        <p className={styles.avg}>평균 {avgStep.toLocaleString()} bpm</p>
      </div>
    </div>
  )
}

export default Chart
