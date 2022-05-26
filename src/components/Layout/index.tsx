import { Outlet } from 'react-router-dom'

import LNB from './LNB'
import Header from './Header'

import styles from './layout.module.scss'

const Layout = () => {
  return (
    <div className={styles.appContainer}>
      <Header />
      <div className={styles.mainContainer}>
        <LNB />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
