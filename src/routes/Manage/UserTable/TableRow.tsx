import { NavLink } from 'react-router-dom'
import cx from 'classnames'

import { IUserLoginData } from 'types/types'

import styles from './userTable.module.scss'

const TableRow = ({ user }: { user: IUserLoginData }) => {
  const { member_seq: memberId, create_date: createdAt, id } = user

  return (
    <tr>
      <td className={cx(styles.tableCol, styles.userNumber)}>{memberId}</td>
      <td className={styles.tableCol}>{createdAt}</td>
      <td className={styles.tableCol}>{id}</td>
      <td className={cx(styles.tableCol, styles.tableBtnContainer)}>
        <NavLink to={`/details/${id}`} state={{ id, createdAt, memberId }}>
          <button type='button' className={styles.tableBtn}>
            상세
          </button>
        </NavLink>
      </td>
    </tr>
  )
}

export default TableRow
