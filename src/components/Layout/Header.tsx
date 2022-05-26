import Button from 'components/Button'
import styles from './layout.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Back Office</h1>
      <div>
        {/* TODO: 로그인한 유저네임 받아오기 */}
        <span>moaadmin1</span>
        {/* TODO: onClick에 로그아웃 함수 넣기 */}
        <Button value='로그아웃' size='medium' />
      </div>
    </header>
  )
}

export default Header
