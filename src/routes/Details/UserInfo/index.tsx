interface IUserData {
  id: string
  userNumber: number
  createdAt: string
}

const UserInfo = ({ userData }: { userData: IUserData }) => {
  const { id, userNumber, createdAt } = userData

  return (
    <div>
      <div>
        <div>로그인ID</div>
        <div>{id}</div>
      </div>
      <div>
        <div>회원번호</div>
        <div>{userNumber}</div>
      </div>
      <div>
        <div>가입 일시</div>
        <div>{createdAt}</div>
      </div>
    </div>
  )
}

export default UserInfo
