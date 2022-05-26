// TODO : props로 { searchData }: { searchData: ISearchData[] } 추가

import { ISearchData } from 'types/types'
import TableRow from './TableRow'

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
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>회원번호</th>
            <th>가입일</th>
            <th>회원상태</th>
            <th>로그인ID</th>
            <th>별명</th>
            <th>생년</th>
            <th>성별</th>
            <th>매니저ID</th>
            <th>상세</th>
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
