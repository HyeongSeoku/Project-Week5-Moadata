import SearchDate from 'components/SearchDate'
import { FormEvent, ChangeEvent, useState } from 'react'
import { useSetRecoilState } from 'recoil'

import { searchedUserInfo } from './atom'

import styles from './userSearch.module.scss'

const UserSearch = () => {
  const [date, setDate] = useState({
    start: '',
    end: '',
  })

  const [userID, setUserID] = useState('')
  const [userNumber, setUserNumber] = useState('')
  // const [searchDate searchDate] = useState('')
  const setSearchUserInfo = useSetRecoilState(searchedUserInfo)

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearchUserInfo({ userID, userNumber: Number(userNumber) })
    setUserID('')
    setUserNumber('')
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
  }

  return (
    <>
      <div className={styles.searchTitle}>회원 검색</div>
      <form className={styles.searchForm} onSubmit={handleSearchSubmit}>
        <div className={styles.inputBox}>
          <div className={styles.title}>로그인ID</div>
          <input className={styles.input} type='input' placeholder='전체' value={userID} onChange={handleUserIdInput} />
          <div className={styles.inputNumBox}>
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
          <button className={styles.searchBtn} type='button' onClick={handleResetClick}>
            필터 초기화
          </button>
          <button className={styles.searchBtn} type='submit'>
            검색
          </button>
        </div>
      </form>
    </>
  )
}

export default UserSearch
