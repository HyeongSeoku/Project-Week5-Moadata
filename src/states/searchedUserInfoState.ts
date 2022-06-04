import { atom } from 'recoil'
import { ISearchedUser } from 'types/types'

export const searchedUserInfoState = atom<ISearchedUser>({
  key: 'searchedUserInfoState',
  default: { userID: '', userNumber: 0, date: { start: '', end: '' } },
})
