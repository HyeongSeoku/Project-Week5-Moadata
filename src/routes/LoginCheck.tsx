import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

import { currentUserState } from 'states'

export const LoginCheck = () => {
  const nav = useNavigate()
  const currentUser = useRecoilValue(currentUserState)
  useEffect(() => {
    if (!currentUser || currentUser === '') nav('/login')
  }, [currentUser, nav])
  if (!currentUser || currentUser === '') return null
  return <Outlet />
}
