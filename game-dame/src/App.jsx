import './App.css'
import UserPanel from './pages/UserPanel'
import AccountRecovery from './pages/AccountRecovery'
import AdminPanel from './pages/AdminPanel'
import LoginForm from './pages/LoginForm'
import RegisterForm from './pages/RegisterForm'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/cadastro" element={<RegisterForm />} />
        <Route path="/recuperar-conta" element={<AccountRecovery />} />
        <Route path="/painel-usuario" element={<UserPanel />} />
        <Route path="/painel-admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
