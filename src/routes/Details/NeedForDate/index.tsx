import { ErrorIcon } from 'assets/svgs'
import styles from './needMoreDate.module.scss'

interface IProps {
  title: string
}
const NeedMoreDate = ({ title }: IProps) => {
  return (
    <div className={styles.needMoreDateContainer}>
      <ErrorIcon className={styles.errorIcon} />
      <div className={styles.errorMessage}>{title}</div>
    </div>
  )
}

export default NeedMoreDate
