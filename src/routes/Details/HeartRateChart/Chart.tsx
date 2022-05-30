import { VictoryAxis, VictoryChart, VictoryContainer, VictoryLine } from 'victory'
import styles from './heartRateChart.module.scss'

interface IProps {
  heartRateData: {
    seq: number
    member_seq: number
    avg_beat: number
    crt_ymdt: string
  }[]
  date: {
    start: string
    end: string
  }
}

const Chart = ({ heartRateData, date }: IProps) => {
  let sumHeatRate = 0
  const data = heartRateData.map((item) => {
    sumHeatRate += item.avg_beat
    return {
      x: item.crt_ymdt,
      y: item.avg_beat,
    }
  })
  return (
    <div className={styles.chartContainer}>
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
          <p className={styles.date}>모든 날짜 선택됨</p>
        ) : (
          <p>
            {date.start}
            {date.end !== date.start ? `-${date.end}` : ''}
          </p>
        )}
        <p className={styles.avg}>
          평균 {Math.floor(data.length > 0 ? sumHeatRate / data.length : 0).toLocaleString()} bpm
        </p>
      </div>
    </div>
  )
}

export default Chart
