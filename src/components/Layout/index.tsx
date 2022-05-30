import { Outlet } from 'react-router-dom'

import LNB from './LNB'
import Header from './Header'
import PageTitle from 'components/PageTitle'

import styles from './layout.module.scss'

const Layout = () => {
  return (
    <div className={styles.appContainer}>
      <Header />
      <div className={styles.mainContainer}>
        <LNB />
        <main>
          <PageTitle />
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
