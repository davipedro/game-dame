import { useState } from 'react'

import '../components/Form.css'

const AccountRecovery = () => {

    const [email, setEmail] = useState('')

  return (
    <div className="wrapper">
        <div className="form-container">
            <h1 className='form-title'>Recuperar <p>Conta</p> </h1>
            <form id='form-input'>
                <input 
                    type="email"
                    name='email'
                    placeholder='E-mail'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />
                <button id='submit-btn' type="submit" disabled={!email}>➜
                </button>
            </form>
            <a className='link' href="cadastro">Criar Conta</a>
            <a className='link' href="login">Fazer Login</a>
        </div>
    </div>
  )
}

export default AccountRecovery