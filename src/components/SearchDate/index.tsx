import { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'
import { pikedDate } from 'states/pickedDate'
import styles from './searchDate.moduel.scss'

const SearchDate = () => {
  const [date, setDate] = useRecoilState(pikedDate)
  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setDate((prev) => ({ ...prev, [name]: value }))
  }
  const handleTodayClick = () => {
    const today = new Date('yyyy-mm-dd')
    setDate({ start: String(today), end: String(today) })
  }
  return (
    <div className={styles.searchDate}>
      <div className={styles.title}>조회기간</div>
      <div className={styles.searchDateInput}>
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
