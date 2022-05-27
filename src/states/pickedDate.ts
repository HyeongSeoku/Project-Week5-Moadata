import { atom } from 'recoil'
import { PikedDate } from 'types/types'

export const pikedDate = atom<PikedDate>({
  key: 'userDataState',
  default: { start: '', end: '' },
})
