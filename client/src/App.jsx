import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './css/style.css'
import ProtectedRoute from './components/util/ProtectedRoute.jsx'
import Login from './components/Login.jsx'
import Home from './pages/Home.jsx';
import Dashboard from './components/admin/Dashboard.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Portfolio from './pages/PortfolioLayout.jsx'
import PortHome from './components/portfolio/PortHome.jsx'
import PortfolioCategory from './components/portfolio/PortfolioCategory.jsx'
import Register from './components/Register.jsx'

function App() {
  const page = location.pathname;
  const token = localStorage.getItem('x-access-token');
  const [isAuth, setIsAuth] = useState(false);
  const isAdminPage = location.pathname.startsWith('/admin');
  const pageName = page.slice(1);
  useEffect(() => {
    document.title = 'Measured & Made | ' + pageName.charAt(0).toUpperCase() + pageName.slice(1)
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
  return (
    <>
      {!isAdminPage && <Navbar />}
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute isAuth={isAuth} /> } >
            <Route path='/admin' element={<Dashboard logout={logout} /> } />
          </Route>
          <Route path='/' element={<Home /> } />
          <Route path='/login' element={<Login login={login} />} />
          <Route path='/register' element={<Register /> }  />
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
