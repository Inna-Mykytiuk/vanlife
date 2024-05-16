import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';


export default function Dashboard() {

  return (
    <section className='section'>
      <p>Dashboard page</p>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </section>
  )
}

