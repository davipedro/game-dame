import { useRef, useState, useEffect } from 'react'

import Logo from '../../assets/gamedame-logo.png'
import Magnifying from '../../assets/magnifying-glass.png'

import NavbarOptions from './NavbarOptions'
import NavbarMenu from './NavbarMenu'

import './Navbar.css'

const Navbar = () => {

  const [search, setSearch] = useState('')

  const searchRef = useRef()

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1460);

  const handleSearchClick = () => {
    if (searchRef.current){
      searchRef.current.submit()
    }
  }

  const handleSearchInput = (e) => {
    setSearch(e.target.value)
  }

  const updateScreenSize = () => {
    setIsSmallScreen(window.innerWidth <= 1460);
  };

  useEffect(() => {
    window.addEventListener('resize', updateScreenSize);
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  return (
    <>
      <nav className='nav-bar'>
        <img id='nav-bar-logo' src={Logo} alt="game dame logo" onClick={() => console.log("ir para página principal")}/>
        
        <div id='navbar-info'>
          {!isSmallScreen ? ( <NavbarOptions /> ) : ( <NavbarMenu />)}
        </div>
        
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
            onClick={handleSearchClick} 
            id='search-icon' 
            src={Magnifying} alt=""
          />
        </div>
      </nav>
    </>
  )
}

export default Navbar