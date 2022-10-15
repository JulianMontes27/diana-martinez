import './NavBar.css'

const NavBar = () => {
  return (
    <ul className='nav-container'>
        <li className="nav-item">
            <a href='#'>Principal</a>
        </li>
        <li className="nav-item">
            <a href='#'>Galería</a>
        </li>
        <li className="nav-item">
            <a target={'_blank'} href='https://www.instagram.com/dianamartineznovias/'>Instagram</a>
        </li>
        <li className="nav-item">
            <a href='#'>Contáctanos</a>
        </li>
    </ul>
  )
}

export default NavBar

