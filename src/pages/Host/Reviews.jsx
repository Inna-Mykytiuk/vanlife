import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function Reviews() {
  return (
    <section className='section'>
      <p>Reviews page</p>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </section>
  )
}