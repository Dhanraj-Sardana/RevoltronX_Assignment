import Home from './components/Home'
import Login from './components/Login'
import Signin from './components/Signin'

import { Routes,Route } from 'react-router-dom'
function App() {
  return (
    <>
    
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signin' element={<Signin/>}/>
      </Routes>
    </>
  )
}

export default App
