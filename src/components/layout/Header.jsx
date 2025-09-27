import { Link } from 'react-router'
import './header.scss'

const Header = () => {
  return (
    <div className="header">
      <h2>Avantgardia</h2>
      <nav className="navbar">
        <ul className="menu">
          <li className="menuitem">
            <Link to={'shop'}>
              Shop
            </Link>
          </li>
          <li className="menuitem">
            <Link to={'categories'}>
              Categories
            </Link>
          </li>
          <li className="menuitem">About</li>
          <li className="menuitem">Cart</li>
        </ul>
      </nav>
    </div >
  )
}

export default Header
