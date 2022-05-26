import { Route, Routes } from 'react-router-dom'
import { useMount } from 'react-use'
import { useSetRecoilState } from 'recoil'

import userDataJSON from 'data/userdata.json'
import { Dashboard } from './Dashboard'
import { Details } from './Details'
import { Login } from './Login'
import { Manage } from './Manage'
import { userDataState } from 'states'

const App = () => {
  const setUserData = useSetRecoilState(userDataState)

  useMount(() => {
    setUserData(userDataJSON)
  })

  return (
    <Routes>
      <Route path='login' element={<Login />} />
      {/* <Route path='/' element={<Layout />}> */}
      <Route path='/' element={<Dashboard />} />
      <Route path='manage' element={<Manage />} />
      <Route path='details/:id' element={<Details />} />
      {/* </Route> */}
      <Route path='*' element={<div>404</div>} />
    </Routes>
  )
}

export default App
