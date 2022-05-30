import styles from './loginAside.module.scss'
import { HeartbeatIcon } from 'assets/svgs'

const LoginAside = () => {
  return (
    <aside className={styles.loginHeader}>
      <div className={styles.loginIcon}>
        <HeartbeatIcon />
      </div>
      <h1>백오피스</h1>
      <p>다시 오신 것을 환영합니다!</p>
    </aside>
  )
}

export default LoginAside
