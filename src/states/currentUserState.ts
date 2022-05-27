import { IUserLoginData } from '../types/types.d'
import { atom } from 'recoil'

export const currentUserState = atom<IUserLoginData>({
  key: 'currentUserState',
  default: {
    id: '',
    member_seq: -1,
    create_date: '',
  },
})
