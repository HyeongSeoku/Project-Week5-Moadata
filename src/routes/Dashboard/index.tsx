import cx from 'classnames'
import styles from './dashboard.module.scss'

export const Dashboard = () => {
  return (
    <div className={cx('container', styles.dashboard)}>
      <span>모아데이타 백오피스 홈 대시보드</span>
    </div>
  )
}
