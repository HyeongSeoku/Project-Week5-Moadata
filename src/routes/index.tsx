import { Route, Routes } from 'react-router-dom'
import { useMount } from 'react-use'
import { useSetRecoilState } from 'recoil'

import userDataJSON from 'data/userdata.json'
import userLoginDataJSON from 'data/userLoginData.json'
// import { Dashboard } from './Dashboard'
// import { Details } from './Details'
import { Login } from './Login'
// import { Manage } from './Manage'
// import { Layout } from 'components'
import { userDataState, userLoginDataState } from 'states'
import { LoginCheck } from './LoginCheck'

const App = () => {
  const setUserData = useSetRecoilState(userDataState)
  const setUserLoginData = useSetRecoilState(userLoginDataState)

  useMount(() => {
    setUserData(userDataJSON)
    setUserLoginData(userLoginDataJSON)
  })

  return (
    <Routes>
      <Route path='/' element={<LoginCheck />}>
        <Route path='/' element={<div>login successful</div>} />
        {/* <Route path='/' element={<Layout />}>
        <Route path='/' element={<Dashboard />} />
        <Route path='manage' element={<Manage />}>
          <Route path=':id' element={<Details />} />
        </Route>
      </Route> */}
      </Route>
      <Route path='login' element={<Login />} />
      <Route path='*' element={<div>404</div>} />
    </Routes>
  )
}

export default App
