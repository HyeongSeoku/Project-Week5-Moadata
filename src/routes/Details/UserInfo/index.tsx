import styles from './userInfo.module.scss'

interface IUserData {
  id: string
  userNumber: number
  createdAt: string
}

const UserInfo = ({ userData }: { userData: IUserData }) => {
  const { id, userNumber, createdAt } = userData

  return (
    <div className={styles.userInfo}>
      <dl className={styles.userInfoItem}>
        <dt>로그인ID</dt>
        <dd>{id}</dd>
      </dl>
      <dl className={styles.userInfoItem}>
        <dt>회원번호</dt>
        <dd>{userNumber}</dd>
      </dl>
      <dl className={styles.userInfoItem}>
        <dt>가입 일시</dt>
        <dd>{createdAt}</dd>
      </dl>
    </div>
  )
}

export default UserInfo
