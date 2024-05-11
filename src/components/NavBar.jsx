import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <header className='container'>
      <div className='nav'>
        <Link to="/">#VANLIFE</Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
          </div>
      </header>
  )
}

