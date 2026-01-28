import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import './css/style.css'
import ProtectedRoute from './components/util/ProtectedRoute.jsx'
import Login from './components/Login.jsx'
import Dashboard from './components/admin/Dashboard.jsx'
import LoginPage from './components/Login.jsx'

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const login = () => {
    setIsAuth(true)
  }
  const logout = () => {
    setIsAuth(false)
  }

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute isAuth={isAuth} /> } >
            <Route path='dashboard' element={<Dashboard logout={logout} /> } />
          </Route>
          <Route path='/' element={<LoginPage login={login} /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
