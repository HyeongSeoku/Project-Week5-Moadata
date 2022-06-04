import { NavLink } from 'react-router-dom'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import cx from 'classnames'
import store from 'store'

import { currentUserState } from 'states'

import { HomeIcon, LogoutIcon, ManageIcon } from 'assets/svgs'
import ProfileImage from 'assets/imgs/profile.png'
import styles from './layout.module.scss'

const LNB = () => {
  const currentUser = useRecoilValue(currentUserState)
  const resetCurrentUser = useResetRecoilState(currentUserState)

  const handleLogoutButton = () => {
    resetCurrentUser()
    store.remove('loginData')
  }

  return (
    <aside className={styles.lnb}>
      <div>
        <div className={styles.topWrapper}>
          <h1>Back Office</h1>
          <div className={styles.profile}>
            <img src={ProfileImage} alt='profile' />
            <span>{currentUser.id}</span>
          </div>
        </div>
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
      </div>
      <button type='button' onClick={handleLogoutButton} className={styles.logoutBtn}>
        <LogoutIcon />
        로그아웃
      </button>
    </aside>
  )
}

export default LNB
