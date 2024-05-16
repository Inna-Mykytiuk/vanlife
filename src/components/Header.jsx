import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/images/logo.png"


export const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='nav'>
          <Link to="/" className='site-logo'>
            <img alt="van" src={logo} className='logo' />
          </Link>
          <nav className='nav-list'>
            <NavLink to="/host" className='nav-link'>Host
            </NavLink>
            <NavLink to="/about" className='nav-link'>About
            </NavLink>
            <NavLink to="/vans" className='nav-link'>Vans
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}

