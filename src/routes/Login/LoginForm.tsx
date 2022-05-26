import { useState, ChangeEvent, FormEvent } from 'react'
import { useRecoilValue } from 'recoil'

import { userLoginDataState } from 'states'

import styles from 'login.module.scss'

const LoginForm = () => {
  const [id, setID] = useState('')
  const [password, setPassword] = useState('')
  const userData = useRecoilValue(userLoginDataState)

  const handleIDChange = (e: ChangeEvent<HTMLInputElement>) => {
    setID(e.currentTarget.value)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }

  const handleLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (userData.filter((v) => v.id === id)) console.log('login success')
    else console.log('login failed')
  }

  return (
    <form onSubmit={handleLoginSubmit}>
      <div className={styles.loginFormSegment}>
        <label htmlFor='id'>ID</label>
        <input type='text' name='id' value={id} required onChange={handleIDChange} />
      </div>
      <div className={styles.loginFormSegment}>
        <label htmlFor='password'>PW</label>
        <input type='password' name='password' value={password} required onChange={handlePasswordChange} />
      </div>
    </form>
  )
}

export default LoginForm
