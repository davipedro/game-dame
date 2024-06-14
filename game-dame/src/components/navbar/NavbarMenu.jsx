import { useState } from 'react'

import './NavbarMenu.css'

const NavbarMenu = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='hamburger-menu'>
        <button className='nav-bar-menu-button' onClick={handleMenuClick}>
          
          {!isMenuOpen ? (
            <span class="material-symbols-outlined">menu</span>
          ) : (
            <span class="material-symbols-outlined">close</span>
          )}

          {isMenuOpen && (
            <ul id="modal-menu">
              <li>
                  <a href="lancamentos">Lançamentos</a>
              </li>
              <li>
                  <a href="populares">Populares</a>
              </li>
              <li>
                  <a href="generos">Gêneros</a>
              </li>
              <li>
                  <a href="promocoes">Promoções</a>
              </li>
              <li>
                  <a href="conta">Conta</a>
              </li>
            </ul>
          )}

        </button>
    </div>
  )
}

export default NavbarMenu