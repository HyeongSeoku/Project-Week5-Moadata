import { useParams } from 'react-router-dom'

import HearRateChart from './HeartRateChart'
import StepCountChart from './StepCountChart'
import styles from './detail.module.scss'

export const Details = () => {
  const { id } = useParams()
  return (
    <div>
      <div className={styles.chartContainer}>
        <HearRateChart id={Number(id)} />
        <StepCountChart id={Number(id)} />
      </div>
    </div>
  )
}
