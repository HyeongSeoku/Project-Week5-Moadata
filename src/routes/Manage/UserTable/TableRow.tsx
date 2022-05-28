import { IUserLoginData } from 'types/types'
import cx from 'classnames'

import styles from './userTable.module.scss'

const TableRow = ({ user }: { user: IUserLoginData }) => {
  const { member_seq: memberId, create_date: createdAt, id } = user

  return (
    <tr>
      <td className={cx(styles.tableCol, styles.userNumber)}>{memberId}</td>
      <td className={styles.tableCol}>{createdAt}</td>
      <td className={styles.tableCol}>{id}</td>
      <td className={cx(styles.tableCol, styles.tableBtnContainer)}>
        <button type='button' className={styles.tableBtn}>
          상세
        </button>
      </td>
    </tr>
  )
}

export default TableRow
