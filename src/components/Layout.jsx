import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from "./Header"
import { Footer } from './Footer';


export const Layout = () => {
  return (
    <div className="page-container">
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default Layout;

