import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function Income() {
  return (
    <section className='section'>
      <p>Income page</p>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </section>
  )
}