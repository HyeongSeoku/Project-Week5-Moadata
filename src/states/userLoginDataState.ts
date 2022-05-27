import { IUserLoginData } from '../types/types.d'
import { atom } from 'recoil'

export const userLoginDataState = atom<IUserLoginData[]>({
  key: 'userLoginDataState',
  default: [],
})
