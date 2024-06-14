import { useRef } from 'react'

import '../components/navbar/Navbar'
import Navbar from '../components/navbar/Navbar'

import './AdminPanel.css'


const AdminPanel = () => {

    const fileInput = useRef(null)

    const handleButtonClick = () => {
        fileInput.current.click()
    }

    const handleFileChange = () => {
        console.log(fileInput.current.files[0])
    }


  return (
    <div>
        <Navbar />
        <main className='admin-panel-main-container'>
            <section className='panel-section edge-section'>
                <h2>Cadastrar Jogo</h2>
                <input 
                    type="text" 
                    placeholder='Título do Jogo'
                />
                <input 
                    type="text" 
                    placeholder='Gênero'
                />
                <textarea 
                    name="" id=""
                    placeholder='Descrição'
                />    
                <input 
                    className='file-input'
                    type="file" accept='image/*'
                    aria-label='hidden-file-input'
                    ref={fileInput}
                    onChange={handleFileChange}
                />
                <button type='button' className='file-btn' onClick={handleButtonClick}>Inserir Imagem</button>
                <button type='submit' className='submit-btn'>Cadastrar</button>
            </section>
            <section className='panel-section middle-section'>
                <h2>Remover Jogo</h2>
                <input 
                    type="text" 
                    placeholder='Título do jogo ou ID'
                />
                <button type='submit' className='submit-btn' id='dark-submit-btn'>Remover</button>
            </section>
            <section className='panel-section edge-section'>
                <h2>Editar Jogo</h2>
                <input 
                    type="text" 
                    placeholder='Título do Jogo'
                />
                <input 
                    type="text" 
                    placeholder='Gênero'
                />
                <textarea 
                    name="" id=""
                    placeholder='Descrição'
                />    
                <input 
                    className='file-input'
                    type="file" accept='image/*'
                    aria-label='hidden-file-input'
                    ref={fileInput}
                    onChange={handleFileChange}
                />
                <button type='button' className='file-btn' onClick={handleButtonClick}>Inserir Imagem</button>
                <button type='submit' className='submit-btn'>Modificar</button>
            </section>
        </main>
    </div>
  )
}

export default AdminPanel