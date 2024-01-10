import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { AuthContext } from './context/auth.context'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

function App() {
  const { getToken } = useContext(AuthContext)

  const isLoggedIn = () => {
    return getToken() ? <Outlet /> :
  }

  return (
    <>
    <Navbar />

    <Routes>
      
      <Route path ='/' element={<Home />} />
      <Route path ='/login' element={<Login />} />
      <Route path ='/signup' element={<Signup />} />

    </Routes>
    </>
  )
}

export default App
