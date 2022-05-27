import { atom } from 'recoil'

export const currentUserState = atom<string>({
  key: 'currentUserState',
  default: '',
})
