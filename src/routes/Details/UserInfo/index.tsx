import styles from './userInfo.module.scss'

interface IProps {
  id: string
  memberNumber: number
  createdDate: string
}

const UserInfo = ({ id, memberNumber, createdDate }: IProps) => {
  return (
    <div className={styles.userInfo}>
      <dl className={styles.userInfoItem}>
        <dt>로그인ID</dt>
        <dd>{id}</dd>
      </dl>
      <dl className={styles.userInfoItem}>
        <dt>회원번호</dt>
        <dd>{memberNumber}</dd>
      </dl>
      <dl className={styles.userInfoItem}>
        <dt>가입 일시</dt>
        <dd>{createdDate}</dd>
      </dl>
    </div>
  )
}

export default UserInfo
