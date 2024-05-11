import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import {NavBar} from './components/NavBar'

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Vans = lazy(() => import('./pages/Vans'));
const VansDetail = lazy(() => import('./pages/VanDetail'));


import '../server'

function App() {

  return (
    <>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VansDetail />} />
        </Routes>
      </Suspense>
    </>
    
  )
}

export default App
