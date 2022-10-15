import './Header.css'
import NavBar from '../navbar/NavBar'

const Header = () => {
  return (
    <div className='header-container'>
      <NavBar/>
      <header className='title-container'>
        <h1><strong>Diana Martínez</strong></h1>
        <h2>Novias & Alta Costura</h2>
      </header>
        
    </div>
  )
}

export default Header