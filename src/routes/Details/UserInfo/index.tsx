import { useRecoilValue } from 'recoil'
import { userLoginDataState } from 'states'

import styles from './userInfo.module.scss'

const UserInfo = ({ id }: { id: string }) => {
  const userLoginData = useRecoilValue(userLoginDataState)
  const filterData = userLoginData.filter((item) => item.id === id)[0]

  return (
    <div className={styles.userInfo}>
      <dl className={styles.userInfoItem}>
        <dt>로그인ID</dt>
        <dd>{id}</dd>
      </dl>
      <dl className={styles.userInfoItem}>
        <dt>회원번호</dt>
        <dd>{filterData.member_seq}</dd>
      </dl>
      <dl className={styles.userInfoItem}>
        <dt>가입 일시</dt>
        <dd>{filterData.create_date}</dd>
      </dl>
    </div>
  )
}

export default UserInfo
