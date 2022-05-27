import { ChangeEvent, ChangeEventHandler, useState } from 'react'
import styles from 'styles'

interface PickedDate {
  start: string
  end: string
}

const SearchDate = () => {
  const [date, setDate] = useState<PickedDate>({ start: '', end: '' })
  const handleStartDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setDate((prev) => ({ ...prev, start: value }))
  }
  const handleEndDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setDate((prev) => ({ ...prev, end: value }))
  }
  const handleTodayClick = () => {
    const today = new Date('yyyy-mm-dd')
    setDate({ start: String(today), end: String(today) })
  }
  return (
    <div className={styles.searchDate}>
      <div>조회기간</div>
      <div>
        <input type='date' value={date.start} onChange={handleStartDateChange} />
        <div>~</div>
        <input type='date' value={date.end} onChange={handleEndDateChange} />
      </div>
      <div>
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
