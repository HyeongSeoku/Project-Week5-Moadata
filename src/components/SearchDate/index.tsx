import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { PickedDate } from 'types/types'
import styles from './searchDate.module.scss'

interface Props {
  date: PickedDate
  setDate: Dispatch<SetStateAction<PickedDate>>
}

const SearchDate = (props: Props) => {
  const { date, setDate } = props

  const getToday = () => {
    const today = new Date()
    const year = today.getFullYear()
    const month = `0${1 + today.getMonth()}`.slice(-2)
    const day = `0${today.getDate()}`.slice(-2)

    return `${year}-${month}-${day}`
  }
  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setDate((prev) => ({ ...prev, [name]: value }))
  }
  const handleTodayClick = () => {
    setDate({ start: getToday(), end: getToday() })
  }
  return (
    <div className={styles.searchDate}>
      <div className={styles.title}>조회기간</div>
      <div className={styles.searchDateInputBox}>
        <input type='date' value={date.start} name='start' onChange={handleDateChange} />
        <div>~</div>
        <input type='date' value={date.end} name='end' onChange={handleDateChange} />
      </div>
      <div className={styles.searchDateBtnBox}>
        <button type='button' onClick={handleTodayClick}>
          오늘
        </button>
        <button type='button'>1주일</button>
        <button type='button'>전체</button>
      </div>
    </div>
  )
}
export default SearchDate
