export interface IUserData {
  seq: number
  member_seq: number
  steps: number
  minutes: number
  distance: number
  calorie: number
  crt_ymdt: string
}

// 임의로 정한 유저 상세 정보 타입
interface ISearchData {
  userNumber: number
  createdAt: string
  userStatus: string
  id: string
  nickname: string
  birth: string
  gender: '남' | '여'
  managerId: string | null
}
