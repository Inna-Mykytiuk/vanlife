import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { requireAuth } from '../../../utils';

export default function Dashboard() {
  requireAuth();
  return (
    <section className='section'>
      <p>Dashboard page</p>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </section>
  )
}

