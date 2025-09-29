import { Link } from 'react-router'
import './header.scss'
import CartWidget from '../ui/CartWidget'

const Header = ({cart}) => {
  return (
    <div className="header">
      <Link to={'/'}>
        <h2>Avantgardia</h2>
      </Link>
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
        </ul>
        <CartWidget cart={cart} />
      </nav>
    </div >
  )
}

export default Header
