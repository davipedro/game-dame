import React from 'react'

import { useState } from 'react'

import './Form.css'

const Form = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className='form-container'>
        <h1 className='form-title'>Registrar</h1>
        <form id='form-input'>
            <input 
                type="text"
                name='name'
                placeholder='Nome do Usuário'
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
            />
            <input 
                type="text"
                name='email'
                placeholder='E-mail'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
            />
            <input 
                type="text"
                name='cpf'
                placeholder='CPF'
                onChange={(e) => setCpf(e.target.value)}
                value={cpf}
                required
            />
            <input 
                type="password"
                name='password'
                placeholder='Senha'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
            />
            <input 
                type="password"
                name='confirmPassword'
                placeholder='Confirmar Senha'
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                required
            />
            <button id='submit-btn' type="submit" disabled={!password || password !== confirmPassword}>➜
            </button>
            {password !== confirmPassword && <p className="error-message">As senhas não coincidem!</p>}
        </form>
        <a id='login-link' href="login">Fazer Login</a>
    </div>
  )
}

export default Form