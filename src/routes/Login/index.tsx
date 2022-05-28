import { useState, ChangeEvent, FormEvent } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useNavigate } from 'react-router-dom'
import { useMount } from 'react-use'
import store from 'store'

import { currentUserState, userLoginDataState } from 'states'

import styles from './login.module.scss'

export const Login = () => {
  const [id, setID] = useState('')
  const [password, setPassword] = useState('')
  const userData = useRecoilValue(userLoginDataState)
  const [isLoginFailed, setIsLoginFailed] = useState(false)
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState)
  const nav = useNavigate()

  const handleIDChange = (e: ChangeEvent<HTMLInputElement>) => {
    setID(e.currentTarget.value)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }

  const handleLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const matchResult = userData.filter((v) => v.id === id)
    if (matchResult.length === 0) {
      setIsLoginFailed(true)
      return
    }
    setCurrentUser(matchResult[0])
    store.set('loginData', matchResult[0])
    nav('/')
  }

  useMount(() => {
    if (currentUser.id !== '') nav('/')
  })

  return (
    <div className={styles.loginWrapper}>
      <header>
        <h1 className={styles.loginHeader}>백오피스</h1>
      </header>
      <main>
        <form className={styles.loginForm} onSubmit={handleLoginSubmit}>
          <div className={styles.loginFormSegment}>
            <label htmlFor='id'>ID</label>
            <input type='text' name='id' value={id} required onChange={handleIDChange} />
          </div>
          <div className={styles.loginFormSegment}>
            <label htmlFor='password'>PW</label>
            <input type='password' name='password' value={password} required onChange={handlePasswordChange} />
          </div>
          {isLoginFailed && <p className={styles.loginFailed}>존재하지 않는 ID입니다</p>}
          <button type='submit' className={styles.loginButton}>
            로그인
          </button>
        </form>
      </main>
    </div>
  )
}
