import UserInfo from './UserInfo'

interface IUserData {
  id: string
  userNumber: number
  createdAt: string
}

// 유저(유령 회원) 정보에 대한 데이터는 공유되지 않아 일단 해당 컴포넌트에서 임의대로 작성헀습니다.
// 추후 data 폴더 유저 정보 생성하고,
// recoilState에 저장된 로그인된 유저 정보에 따라 데이터를 불러오도록 하면 될 거 같습니다.
const dummyUserData: IUserData = { id: 'id123', userNumber: 1234, createdAt: '2022-04-20 12:34:56' }

export const Details = () => {
  return <UserInfo userData={dummyUserData} />
}
