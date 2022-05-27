import { useParams } from 'react-router-dom'

import UserInfo from './UserInfo'

export const Details = () => {
  const { id } = useParams()

  return <UserInfo id={String(id)} />
}
