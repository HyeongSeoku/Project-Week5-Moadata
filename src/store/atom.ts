import { atom } from 'recoil'
import { ISearchedUser } from 'types/types'

export const searchedUserInfo = atom<ISearchedUser>({
  key: 'searchedUserInfo',
  default: { userID: '', userNumber: 0, date: { start: '', end: '' } },
})
