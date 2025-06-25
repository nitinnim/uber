import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import { UserDataContext } from './context/UserContext'
import Home from './pages/Home'
import UserProtectionWrapper from './pages/UserProtectionWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectionWrapper from './pages/CaptainProtectionWrapper'
import CaptainLogout from './pages/CaptainLogout'

const App = () => {
  const data = useContext(UserDataContext);
  // console.log("Data-", data);
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/signup" element={<UserSignup />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/captain-signup" element={<CaptainSignup />} />
      <Route path="/home" element={
        <UserProtectionWrapper>
          <Home />
        </UserProtectionWrapper>
      } />
      <Route path="/users/logout" element={
        <UserProtectionWrapper>
          <UserLogout />
        </UserProtectionWrapper>
      } />

      <Route path="/captain-home" element={
        <CaptainProtectionWrapper>
          <CaptainHome />
        </CaptainProtectionWrapper>
      } />
      <Route path="/captain-logout" element={
        <CaptainProtectionWrapper>
          <CaptainLogout />
        </CaptainProtectionWrapper>
      } />
    </Routes>
  )
}

export default App
