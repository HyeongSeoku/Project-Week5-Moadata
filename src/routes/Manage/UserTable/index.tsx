import React, { useMemo } from 'react'
import { useRecoilValue } from 'recoil'
import cx from 'classnames'
import dayjs from 'dayjs'

import TableRow from './TableRow'
import { searchedUserInfo } from 'store/atom'
import { ISearchedUser } from 'types/types'
import userLoginDataJSON from 'data/userLoginData.json'

import styles from './userTable.module.scss'

const UserTable = () => {
  const searchUserInfo = useRecoilValue(searchedUserInfo)

  const filterSearchUser = (data: ISearchedUser) => {
    // 모든 검색어 입력이 안됐을 경우 빈배열 리턴
    if (data.userID === '' && data.userNumber === 0 && data.date.start === '' && data.date.end === '') return []

    const matchId = (targetId: string) => {
      const { userID: idKeyword } = data
      // 비어있을 경우 모든 조건에 true
      if (idKeyword === '') return true
      if (targetId.includes(idKeyword)) return true
      return false
    }

    const matchDate = (targetDate: string) => {
      const { date: dateKeyword } = data
      // 비어있을 경우 모든 조건에 true
      if (dateKeyword.start === '' && dateKeyword.end === '') return true
      if (
        targetDate >= dayjs(dateKeyword.start).format('YYYY-MM-DD') &&
        targetDate <= dayjs(dateKeyword.end).format('YYYY-MM-DD')
      )
        return true
      return false
    }

    const matchMemberSeq = (targetSeq: number) => {
      const { userNumber: memberSeqKeyword } = data
      // 비어있을 경우 모든 조건에 true
      if (memberSeqKeyword === 0) return true
      if (memberSeqKeyword === targetSeq) return true
      return false
    }

    const userData = userLoginDataJSON.filter((user) => {
      return matchId(user.id) && matchMemberSeq(user.member_seq) && matchDate(user.create_date)
    })

    return userData
  }

  const tableData = useMemo(() => {
    return filterSearchUser(searchUserInfo)
  }, [searchUserInfo])

  const EmptySearchList = <span>일치하는 회원이 없습니다.</span>

  const CntSearchList = (
    <>
      <span>전체 총</span>
      <span>{tableData.length}</span>
      <span>명의 회원이 검색 되었습니다.</span>
    </>
  )

  const MessageElement = tableData.length === 0 ? EmptySearchList : CntSearchList

  return (
    <div className={styles.tableWrapper}>
      <div>{MessageElement}</div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={cx(styles.tableCol, styles.tableTitle)}>회원번호</th>
            <th className={cx(styles.tableCol, styles.tableTitle)}>가입일</th>
            <th className={cx(styles.tableCol, styles.tableTitle)}>로그인ID</th>
            <th className={cx(styles.tableCol, styles.tableTitle)}>상세</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((user) => (
            <TableRow key={`user_search_${user.member_seq}`} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable
