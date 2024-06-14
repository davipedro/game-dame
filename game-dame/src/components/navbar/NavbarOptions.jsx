import './NavbarOptions.css'

const NavbarOptions = () => {
  return (
    <ul className='nav-options'>
        <li id='item-with-border'>
            <a href="lancamentos">Lançamentos</a>
        </li>
        <li id='item-with-border'>
            <a href="populares">Populares</a>
        </li>
        <li id='item-with-border'>
            <a href="generos">Gêneros</a>
        </li>
        <li id='item-with-border'>
            <a href="promocoes">Promoções</a>
        </li>
        <li>
            <a href="conta">Conta</a>
        </li>
    </ul>
  )
}

export default NavbarOptions