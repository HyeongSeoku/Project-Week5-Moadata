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
  const chartData = [...rawData[0].heart_rate]
    .reverse()
    .filter(
      (item) =>
        dayjs(startDate).unix() <= dayjs(item.crt_ymdt).unix() &&
        dayjs(endDate).unix() + 86400 > dayjs(item.crt_ymdt).unix()
    )
  const data = chartData.map((item) => {
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
        containerComponent={<VictoryContainer responsive={false} width={600} height={400} />}
      >
        <VictoryAxis dependentAxis />
        <VictoryAxis crossAxis scale={{ x: 'time' }} fixLabelOverlap tickFormat={() => ''} domainPadding={{ y: 10 }} />
        <VictoryLine data={data} />
      </VictoryChart>
    </div>
  )
}
export default HearRateChart
