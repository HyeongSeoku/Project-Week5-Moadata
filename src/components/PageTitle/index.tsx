import { Link, useLocation } from 'react-router-dom'

import styles from './pageTitle.module.scss'

const PageTitle = () => {
  const location = useLocation()
  const locationList = location.pathname.split('/')
  const currentLocation = locationList[locationList.length - 1]

  const makeTitle = () => {
    if (currentLocation === '') return '대시보드'
    if (currentLocation === 'manage') return '회원 관리'
    return '회원 상세 정보'
  }

  const title = makeTitle()

  return (
    <>
      <div className={styles.menuLink}>
        <Link to='/'>홈</Link>
        <span className={styles.arrow}>&gt;</span>
        <Link to='/manage'>회원 관리</Link>
        <span className={styles.arrow}>&gt;</span>
        <span>회원 상세</span>
      </div>
      <h2 className='title'>{title}</h2>
    </>
  )
}

export default PageTitle
