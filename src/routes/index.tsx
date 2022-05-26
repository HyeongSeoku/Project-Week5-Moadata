import { Route, Routes } from 'react-router-dom'
import { useMount } from 'react-use'
import { useSetRecoilState } from 'recoil'

import userDataJSON from 'data/userdata.json'

import { Layout } from 'components'
import { userDataState } from 'states'

const App = () => {
  const setUserData = useSetRecoilState(userDataState)

  useMount(() => {
    setUserData(userDataJSON)
  })

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Dashboard />} />
        <Route path='manage' element={<Manage />} />
        <Route path='details/:id' element={<Details />} />
      </Route>
      <Route path='*' element={<div>404</div>} />
    </Routes>
  )
}

export default App
