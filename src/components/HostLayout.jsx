import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {  NavLink  } from 'react-router-dom';


const HostLayout = () => {
  return (

    <section className='section'>
      <div className='container'>
      <nav className='host-nav'>
        <NavLink to="." className='nav-link' end >Dashboard</NavLink>
        <NavLink to="income" className='nav-link'>Income</NavLink>
        <NavLink to="vans" className='nav-link'>Vans</NavLink>
        <NavLink to="reviews" className='nav-link'>Reviews</NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
      </Suspense>
    </div>
    </section>

  )
}

export default HostLayout;