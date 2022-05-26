import { ISearchData } from 'types/types'

const TableRow = ({ user }: { user: ISearchData }) => {
  return (
    <tr>
      <td>{user.userNumber}</td>
      <td>{user.createdAt}</td>
      <td>{user.userStatus}</td>
      <td>{user.id}</td>
      <td>{user.nickname}</td>
      <td>{user.birth}</td>
      <td>{user.gender}</td>
      <td>{user.managerId}</td>
      <td>버튼</td>
    </tr>
  )
}

export default TableRow
