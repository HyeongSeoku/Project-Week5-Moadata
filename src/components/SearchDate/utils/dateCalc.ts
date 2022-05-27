export const getToday = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = `0${1 + today.getMonth()}`.slice(-2)
  const day = `0${today.getDate()}`.slice(-2)
  return `${year}-${month}-${day}`
}
export const getAfterWeek = () => {
  const today = new Date()
  const afterWeek = new Date(today.setDate(today.getDate() + 6))
  const year = afterWeek.getFullYear()
  const month = `0${1 + afterWeek.getMonth()}`.slice(-2)
  const day = `0${afterWeek.getDate()}`.slice(-2)
  return `${year}-${month}-${day}`
}
