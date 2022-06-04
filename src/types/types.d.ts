export interface IUserData {
  seq: number
  member_seq: number
  steps: number
  minutes: number
  distance: number
  calorie: number
  crt_ymdt: string
}

interface ISearchedUser {
  userID: string
  userNumber: number
  date: { start: string; end: string }
}
export interface IUserLoginData {
  id: string
  member_seq: number
  create_date: string
}

export interface PickedDate {
  start: string
  end: string
}
