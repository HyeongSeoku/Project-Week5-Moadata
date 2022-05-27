import { atom } from 'recoil'

interface ISearchedUser {
  userID: string
  userNumber: number
}

export const searchedUserInfo = atom<ISearchedUser>({
  key: 'searchedUserInfo',
  default: { userID: '', userNumber: 0 },
})
