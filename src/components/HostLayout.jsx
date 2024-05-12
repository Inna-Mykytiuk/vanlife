import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {  NavLink  } from 'react-router-dom';


const HostLayout = () => {
  return (

    <div className='container'>
      <nav className='host-nav'>
        <NavLink to="/host" className='nav-link' end >Dashboard</NavLink>
        <NavLink to="/host/income" className='nav-link'>Income</NavLink>
        <NavLink to="/host/vans" className='nav-link'>Vans</NavLink>
        <NavLink to="/host/reviews" className='nav-link'>Reviews</NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
      </Suspense>
    </div>

  )
}

export default HostLayout;