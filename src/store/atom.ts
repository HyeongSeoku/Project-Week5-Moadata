import { atom } from 'recoil'

interface ISearchedUser {
  userID: string
  userNumber: number
  date: object
}

export const searchedUserInfo = atom<ISearchedUser>({
  key: 'searchedUserInfo',
  default: { userID: '', userNumber: 0, date: { start: '', end: '' } },
})
