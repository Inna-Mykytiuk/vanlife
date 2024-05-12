import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='container'>
      <div className='nav'>
        <Link to="/" className='site-logo'>#VANLIFE</Link>
        <nav>
          <NavLink to="/host" className='nav-link'>Host
          </NavLink>
          <NavLink to="/about" className='nav-link'>About
          </NavLink>
          <NavLink to="/vans" className='nav-link'>Vans
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

