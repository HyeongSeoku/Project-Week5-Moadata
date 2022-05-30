import { FormEvent, ChangeEvent, useState } from 'react'
import { useSetRecoilState } from 'recoil'

import { searchedUserInfo } from '../../../store/atom'

import SearchDate from 'components/SearchDate'
import Button from 'components/Button'

import styles from './userSearch.module.scss'

const UserSearch = () => {
  const setSearchUserInfo = useSetRecoilState(searchedUserInfo)
  const [userID, setUserID] = useState('')
  const [userNumber, setUserNumber] = useState('')
  const [date, setDate] = useState({
    start: '',
    end: '',
  })

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearchUserInfo({ userID, userNumber: Number(userNumber), date })
    setUserID('')
    setUserNumber('')
    setDate({ start: '', end: '' })
  }

  const handleUserIdInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserID(e.currentTarget.value)
  }

  const handleUserNumInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserNumber(e.currentTarget.value)
  }

  const handleResetClick = () => {
    setUserID('')
    setUserNumber('')
    setDate({ start: '', end: '' })
  }

  return (
    <div className='container'>
      <form className={styles.searchForm} onSubmit={handleSearchSubmit}>
        <div className={styles.inputBox}>
          <div className={styles.inputItem}>
            <div className={styles.title}>로그인ID</div>
            <input
              className={styles.input}
              type='input'
              placeholder='전체'
              value={userID}
              onChange={handleUserIdInput}
            />
          </div>
          <div className={styles.inputItem}>
            <div className={styles.title}>회원번호</div>
            <input
              className={styles.input}
              type='input'
              placeholder='전체'
              value={userNumber}
              onChange={handleUserNumInput}
            />
          </div>
        </div>
        <SearchDate date={date} setDate={setDate} />
        <div className={styles.buttonBox}>
          <Button value='필터 초기화' size='medium' onClick={handleResetClick} />
          <Button value='검색' size='medium' type='submit' />
        </div>
      </form>
    </div>
  )
}

export default UserSearch
