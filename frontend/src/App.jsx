import Blog from './components/Blog'
import Contact from './components/Contact'
import Home from './components/Home'
import Login from './components/Login'
import Logout from './components/Logout'
import Signin from './components/Signin'
import { Routes,Route } from 'react-router-dom'

function App() {
  return (
    <>
   
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
      </Routes>
  
    </>
  )
}

export default App
