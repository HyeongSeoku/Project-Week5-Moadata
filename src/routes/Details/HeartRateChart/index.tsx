import dayjs from 'dayjs'
import { VictoryAxis, VictoryChart, VictoryContainer, VictoryLine } from 'victory'

import styles from './heartRateChart.module.scss'
import heartRateData from 'data/heartRate.json'

interface IProps {
  id: number
}
const HearRateChart = ({ id }: IProps) => {
  const startDate = '2022-02-26'
  const endDate = '2022-02-26'
  const rawData = heartRateData.filter((item) => item.id === id)
  let sumHeatRate = 0
  const chartData = [...rawData[0].heart_rate]
    .reverse()
    .filter(
      (item) =>
        dayjs(startDate).unix() <= dayjs(item.crt_ymdt).unix() &&
        dayjs(endDate).unix() + 86400 > dayjs(item.crt_ymdt).unix()
    )
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
        <p>
          {startDate}
          {startDate !== endDate ? `-${endDate}` : ''}
        </p>
        <p>평균 {Math.floor(sumHeatRate / data.length).toLocaleString()} bpm</p>
      </div>
    </div>
  )
}
export default HearRateChart
