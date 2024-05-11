import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <header className='container'>
          <Link to="/">#VANLIFE</Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
  )
}

