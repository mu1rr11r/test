import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import Login from './pages/aouth/Login'
import Register from './pages/aouth/Register'
import Authlayout from './layouts/Authlayout/Authlayout'
import Userlayout from './layouts/Userlayout/Userlayout'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Userlayout />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      <Route element={<Authlayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
