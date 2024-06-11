import { useRef, useState } from 'react'

import Logo from '../assets/gamedame-logo.png'
import Magnifying from '../assets/magnifying-glass.png'

import './Navbar.css'

const Navbar = () => {

  const [search, setSearch] = useState('')

  const searchRef = useRef()

  const handleClick = () => {
    if (searchRef.current){
      searchRef.current.submit()
    }
  }

  const handleSearchInput = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <div id="box-shadow"></div>
      <nav className='nav-bar'>
        <img id='logo' src={Logo} alt="game dame logo" />
        <ul className='nav-options'>
          <li id='item-with-border'>
            <a href="/lancamentos">Lançamentos</a>
          </li>
          <li id='item-with-border'>
            <a href="/populares">Populares</a>
          </li>
          <li id='item-with-border'>
            <a href="/generos">Gêneros</a>
          </li>
          <li id='item-with-border'>
            <a href="/promocoes">Promoções</a>
          </li>
          <li>
            <a href="conta">Conta</a>
          </li>
        </ul>
        <div className='search-bar'>
          <input 
            type="search" 
            name="search" 
            id="search-input" 
            placeholder='Pesquisar'
            value={search}
            onChange={handleSearchInput}
          />
          <img 
            onClick={handleClick} 
            id='search-icon' 
            src={Magnifying} alt=""
          />
        </div>
      </nav>
    </>
  )
}

export default Navbar