import { IUserData } from '../types/types.d'
import { atom } from 'recoil'

export const userDataState = atom<IUserData[]>({
  key: 'userDataState',
  default: [],
})
