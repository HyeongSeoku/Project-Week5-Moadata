import styles from './layout.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Back Office</h1>
      <div>
        {/* TODO: 로그인한 유저네임 받아오기 */}
        <span>moaadmin1</span>
        <button type='button'>로그아웃</button>
      </div>
    </header>
  )
}

export default Header
