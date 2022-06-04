import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from 'react'
import cx from 'classnames'

import { PickedDate } from 'types/types'
import { getBeforeWeek, getToday } from './utils/dateCalc'

import styles from './searchDate.module.scss'

interface Props {
  date: PickedDate
  setDate: Dispatch<SetStateAction<PickedDate>>
  isColumn: boolean
}

const SearchDate = (props: Props) => {
  const { date, setDate, isColumn } = props

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setDate((prev) => ({ ...prev, [name]: value }))
  }
  const handleTodayClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { btn } = e.currentTarget.dataset
    if (btn === 'today') {
      setDate({ start: getToday(), end: getToday() })
    }
    if (btn === 'week') {
      setDate({ start: getBeforeWeek(), end: getToday() })
    }
    if (btn === 'all') {
      setDate({ start: '', end: '' })
    }
  }
  return (
    <div className={styles.searchDate}>
      <div className={styles.title}>조회기간</div>
      <div className={cx(styles.searchDateOption, { [styles.column]: isColumn })}>
        <div className={styles.searchDateInputBox}>
          <input type='date' value={date.start} name='start' onChange={handleDateChange} />
          <div>~</div>
          <input type='date' value={date.end} name='end' onChange={handleDateChange} />
        </div>
        <div className={styles.searchDateBtnBox}>
          <button type='button' data-btn='today' onClick={handleTodayClick}>
            오늘
          </button>
          <button type='button' data-btn='week' onClick={handleTodayClick}>
            1주일
          </button>
          <button type='button' data-btn='all' onClick={handleTodayClick}>
            전체
          </button>
        </div>
      </div>
    </div>
  )
}
export default SearchDate
