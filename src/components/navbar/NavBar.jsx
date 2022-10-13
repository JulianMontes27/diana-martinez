import './NavBar.css'

const NavBar = () => {
  return (
    <ul className='nav-container'>
        <li className="nav-item">Principal</li>
        <li className="nav-item">Galería</li>
        <li className="nav-item">
            <a target={'_blank'} href='https://www.instagram.com/dianamartineznovias/'>Instagram</a>
        </li>
        <li className="nav-item">Contáctanos</li>
    </ul>
  )
}

export default NavBar
