import { ErrorIcon } from 'assets/svgs'
import styles from './needMoreDate.module.scss'

const NeedMoreDate = () => {
  return (
    <div className={styles.needMoreDateContainer}>
      <ErrorIcon className={styles.errorIcon} />
      <div className={styles.errorMessage}>현재 선택한 날짜에 포함되는 data가 없습니다.</div>
    </div>
  )
}

export default NeedMoreDate
