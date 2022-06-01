import { useState, ChangeEvent, FormEvent } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useNavigate } from 'react-router-dom'
import { useMount } from 'react-use'
import store from 'store'

import { currentUserState, userLoginDataState } from 'states'

import styles from './login.module.scss'
import LoginAside from './LoginAside'

export const Login = () => {
  const [id, setID] = useState('')
  const [password, setPassword] = useState('')
  const userData = useRecoilValue(userLoginDataState)
  const [isLoginFailed, setIsLoginFailed] = useState(false)
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState)
  const [isRememberChecked, setIsRememberChecked] = useState(false)
  const nav = useNavigate()

  const handleIDChange = (e: ChangeEvent<HTMLInputElement>) => {
    setID(e.currentTarget.value)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }

  const handleRememberChange = () => {
    setIsRememberChecked((prevState) => !prevState)
  }

  const handleLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const matchResult = userData.filter((v) => v.id === id)
    if (matchResult.length === 0) {
      setIsLoginFailed(true)
      return
    }
    setCurrentUser(matchResult[0])
    if (isRememberChecked) store.set('loginData', matchResult[0])
    nav('/')
  }

  useMount(() => {
    const storeUser = store.get('loginData')
    if (currentUser.id !== '' || storeUser.id !== '') nav('/')
  })

  return (
    <div className={styles.loginBackground}>
      <div className={styles.loginWrapper}>
        <LoginAside />
        <main className={styles.loginMain}>
          <form className={styles.loginForm} onSubmit={handleLoginSubmit}>
            <input
              className={styles.loginInput}
              type='text'
              name='id'
              value={id}
              required
              placeholder='ID'
              onChange={handleIDChange}
            />
            <input
              className={styles.loginInput}
              type='password'
              name='password'
              placeholder='Password'
              value={password}
              required
              onChange={handlePasswordChange}
            />
            {isLoginFailed && <p className={styles.loginFailed}>존재하지 않는 ID입니다</p>}
            <div className={styles.loginBottom}>
              <input type='checkbox' name='isRemember' checked={isRememberChecked} onChange={handleRememberChange} />
              <label htmlFor='isRemember'>자동 로그인</label>
              <button type='submit' className={styles.loginButton}>
                로그인
              </button>
            </div>
          </form>
          <span>비밀번호를 잊어버리셨나요?</span>
        </main>
      </div>
    </div>
  )
}
