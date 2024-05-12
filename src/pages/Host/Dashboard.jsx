import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function Dashboard () {
  return (
    <div>
      Dashboard page
      <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
      </Suspense>
    </div>
  )
}

