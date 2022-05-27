import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'

import { currentUserState, userDataState, userLoginDataState } from 'states'

import Button from 'components/Button'
import styles from './layout.module.scss'

const Header = () => {
  const currentUser = useRecoilValue(currentUserState)
  const resetCurrentUser = useResetRecoilState(currentUserState)

  const handleLogoutButton = () => {
    resetCurrentUser()
    store.remove('loginData')
  }
  return (
    <header className={styles.header}>
      <h1>Back Office</h1>
      <div>
        <span>{currentUser.id}님</span>
        <Button value='로그아웃' size='medium' onClick={handleLogoutButton} />
      </div>
    </header>
  )
}

export default Header
