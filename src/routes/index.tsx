import { Route, Routes } from 'react-router-dom'
import { useMount } from 'react-use'
import { useSetRecoilState } from 'recoil'
import store from 'store'

import userDataJSON from 'data/userdata.json'
import userLoginDataJSON from 'data/userLoginData.json'
import { Login } from './Login'
import { Dashboard } from './Dashboard'
import { Details } from './Details'
import { Manage } from './Manage'
import { Layout } from 'components'
import { currentUserState, userDataState, userLoginDataState } from 'states'
import { LoginCheck } from './LoginCheck'

const App = () => {
  const setUserData = useSetRecoilState(userDataState)
  const setUserLoginData = useSetRecoilState(userLoginDataState)
  const setCurrentUser = useSetRecoilState(currentUserState)

  useMount(() => {
    const currentUserDataLocal = store.get('loginData')
    if (currentUserDataLocal) setCurrentUser(currentUserDataLocal)
    setUserData(userDataJSON)
    setUserLoginData(userLoginDataJSON)
  })

  return (
    <Routes>
      <Route path='/' element={<LoginCheck />}>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Dashboard />} />
          <Route path='manage' element={<Manage />} />
          <Route path='details/:id' element={<Details />} />
        </Route>
      </Route>
      <Route path='login' element={<Login />} />
      <Route path='*' element={<div>404</div>} />
    </Routes>
  )
}

export default App
