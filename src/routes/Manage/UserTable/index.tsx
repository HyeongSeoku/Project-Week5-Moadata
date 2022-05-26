import { ISearchData } from 'types/types'
import TableRow from './TableRow'
import cx from 'classnames'

import styles from './userTable.module.scss'
import React from 'react'

// TODO : props로 { searchData }: { searchData: ISearchData[] } 추가

const DUMMY_USER_LIST: ISearchData[] = [
  {
    userNumber: 2,
    createdAt: '2022-03-02',
    userStatus: '정상 회원',
    id: 'minsu12',
    nickname: '건강최고',
    birth: '1990년',
    gender: '남',
    managerId: null,
  },
  {
    userNumber: 3,
    createdAt: '2022-02-02',
    userStatus: '휴면 회원',
    id: 'jisu22',
    nickname: '건강왕',
    birth: '1997년',
    gender: '여',
    managerId: null,
  },
  {
    userNumber: 7,
    createdAt: '2020-01-02',
    userStatus: '정상 회원',
    id: 'koko110',
    nickname: '코코호도',
    birth: '2000년',
    gender: '남',
    managerId: 'manager123',
  },
]

const UserTable = () => {
  const EmptySearchList = React.createElement('span', {}, '일치하는 회원이 없습니다.')

  const CntSearchList = React.createElement(
    React.Fragment,
    null,
    React.createElement('span', null, '전체 총'),
    React.createElement('span', null, `${DUMMY_USER_LIST.length}`),
    React.createElement('span', null, '명의 회원이 검색되었습니다.')
  )

  const MessageElement = DUMMY_USER_LIST.length === 0 ? EmptySearchList : CntSearchList

  return (
    <div className={styles.tableWrapper}>
      <div>{MessageElement}</div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={cx(styles.tableCol, styles.tableTitle)}>회원번호</th>
            <th className={cx(styles.tableCol, styles.tableTitle)}>가입일</th>
            <th className={cx(styles.tableCol, styles.tableTitle)}>회원상태</th>
            <th className={cx(styles.tableCol, styles.tableTitle)}>로그인ID</th>
            <th className={cx(styles.tableCol, styles.tableTitle)}>별명</th>
            <th className={cx(styles.tableCol, styles.tableTitle)}>생년</th>
            <th className={cx(styles.tableCol, styles.tableTitle)}>성별</th>
            <th className={cx(styles.tableCol, styles.tableTitle)}>매니저ID</th>
            <th className={cx(styles.tableCol, styles.tableTitle)}>상세</th>
          </tr>
        </thead>
        <tbody>
          {DUMMY_USER_LIST.map((user) => (
            <TableRow key={`user_search_${user.userNumber}`} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable
