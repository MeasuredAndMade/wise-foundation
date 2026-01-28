import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './css/style.css'
import ProtectedRoute from './components/util/ProtectedRoute.jsx'
import Login from './components/Login.jsx'
import Home from './pages/Home.jsx';
import Dashboard from './components/admin/Dashboard.jsx'
import LoginPage from './components/Login.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Portfolio from './pages/PortfolioLayout.jsx'
import PortHome from './components/portfolio/PortHome.jsx'
import PortfolioCategory from './components/portfolio/PortfolioCategory.jsx'

function App() {
  const token = localStorage.getItem('x-access-token');
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    console.log(token)
    if(token){
      setIsAuth(true)
    }
  }, [])

  const login = () => {
    setIsAuth(true)
  }
  const logout = () => {
    setIsAuth(false)
  }
  console.log(isAuth);
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute isAuth={isAuth} /> } >
            <Route path='/admin' element={<Dashboard logout={logout} /> } />
          </Route>
          <Route path='/' element={<Home /> } />
          <Route path='/login' element={<Login login={login} />} />
          <Route path='/about' element={<About /> } />
          <Route path='/portfolio' element={<Portfolio /> } >
            <Route index element={<PortHome />} />
            <Route path=':category' element={<PortfolioCategory /> } />
          </Route>
          <Route path='/contact' element={<Contact />} />
        </Routes> 
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
