import { NavLink } from 'react-router-dom'
import cx from 'classnames'

import styles from './layout.module.scss'
import { HomeIcon, ManageIcon } from 'assets/svgs'

const LNB = () => {
  return (
    <aside className={styles.lnb}>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <NavLink to='/' className={({ isActive }) => cx('mainText', { [styles.isActive]: isActive })}>
              <HomeIcon />
              백오피스 홈
            </NavLink>
          </li>
          <li>
            <NavLink to='manage' className={({ isActive }) => cx('mainText', { [styles.isActive]: isActive })}>
              <ManageIcon />
              회원 관리
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default LNB
