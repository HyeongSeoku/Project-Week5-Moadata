import { ISearchData } from 'types/types'
import cx from 'classnames'

import styles from './userTable.module.scss'

const TableRow = ({ user }: { user: ISearchData }) => {
  const { userNumber, createdAt, userStatus, id, nickname, birth, gender, managerId } = user
  const manageId = managerId || '-'

  return (
    <tr>
      <td className={cx(styles.tableCol, styles.userNumber)}>{userNumber}</td>
      <td className={styles.tableCol}>{createdAt}</td>
      <td className={styles.tableCol}>{userStatus}</td>
      <td className={styles.tableCol}>{id}</td>
      <td className={styles.tableCol}>{nickname}</td>
      <td className={styles.tableCol}>{birth}</td>
      <td className={styles.tableCol}>{gender}</td>
      <td className={styles.tableCol}>{manageId}</td>
      <td className={cx(styles.tableCol, styles.tableBtnContainer)}>
        <button type='button' className={styles.tableBtn}>
          상세
        </button>
      </td>
    </tr>
  )
}

export default TableRow
