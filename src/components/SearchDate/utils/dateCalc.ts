export const getToday = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = `0${1 + today.getMonth()}`.slice(-2)
  const day = `0${today.getDate()}`.slice(-2)
  return `${year}-${month}-${day}`
}
export const getBeforeWeek = () => {
  const today = new Date()
  const beforeWeek = new Date(today.setDate(today.getDate() - 7))
  const year = beforeWeek.getFullYear()
  const month = `0${1 + beforeWeek.getMonth()}`.slice(-2)
  const day = `0${beforeWeek.getDate()}`.slice(-2)
  return `${year}-${month}-${day}`
}
