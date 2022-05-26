import UserInfo from './UserInfo'

interface IUserData {
  id: string
  userNumber: number
  createdAt: string
}

const dummyUserData: IUserData = { id: 'id123', userNumber: 1234, createdAt: '2022-04-20 12:34:56' }

export const Details = () => {
  return <UserInfo userData={dummyUserData} />
}
