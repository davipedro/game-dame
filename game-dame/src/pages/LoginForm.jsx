import { useState } from 'react'

import '../components/Form.css'

const LoginForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <div className='wrapper'>
        <div className="form-container">
            <h1 className='form-title'>Login</h1>
            <form id='form-input'>
                <input 
                    type="email"
                    name='email'
                    placeholder='E-mail'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
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
                <button id='submit-btn' type="submit" disabled={!password || !email}>➜
                </button>
            </form>
            <a className='link' href="cadastro">Criar Conta</a>
            <a className='link' href="recuperar-conta">Esqueceu a Senha?</a>
        </div>
    </div>
  )
}

export default LoginForm