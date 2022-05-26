import dayjs from 'dayjs'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryContainer } from 'victory'

import stepCountData from 'data/stepCount.json'
import styles from './stepCountChart.module.scss'

interface IProps {
  id: number
}

const StepCountChart = ({ id }: IProps) => {
  const startDate = '2022-04-19'
  const endDate = '2022-04-19'
  const rawData = stepCountData.filter((item) => item.id === id)
  const chartData = [...rawData[0].step_count]
    .reverse()
    .filter(
      (item) =>
        dayjs(startDate).unix() <= dayjs(item.crt_ymdt).unix() &&
        dayjs(endDate).unix() + 86400 > dayjs(item.crt_ymdt).unix()
    )
  const data = chartData.map((item) => {
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
        containerComponent={<VictoryContainer responsive={false} width={600} height={400} />}
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
    </div>
  )
}

export default StepCountChart
