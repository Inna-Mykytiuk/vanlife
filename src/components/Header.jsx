import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/images/logo.png";
import linksData from "../data/common.json";


export const Header = () => {
  const { linksText } = linksData;

  return (
    <header>
      <div className='container'>
        <div className='nav'>
          <Link to="/" className='site-logo'>
            <img alt="van" src={logo} className='logo' />
          </Link>
          <nav className='nav-list'>
            {linksText.map(link => (
              <NavLink key={link.path} to={link.path} className='nav-link'>
                {link.text}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

