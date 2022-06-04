import { useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

import { userLoginDataState } from 'states'
import HearRateChart from './HeartRateChart'
import StepCountChart from './StepCountChart'
import UserInfo from './UserInfo'

import styles from './detail.module.scss'

export const Details = () => {
  const { id } = useParams()
  const userLoginData = useRecoilValue(userLoginDataState)
  const filterData = userLoginData.filter((item) => item.id === String(id))[0]

  return (
    <div className='container'>
      <UserInfo id={String(id)} memberNumber={filterData.member_seq} createdDate={filterData.create_date} />
      <div className={styles.chartContainer}>
        <HearRateChart id={filterData.member_seq} />
        <StepCountChart id={filterData.member_seq} />
      </div>
    </div>
  )
}
