import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HostLayout from './components/HostLayout';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Vans = lazy(() => import('./pages/Vans/Vans'));
const VansDetail = lazy(() => import('./pages/Vans/VanDetail'));
const Dashboard = lazy(() => import('./pages/Host/Dashboard'));
const Income = lazy(() => import('./pages/Host/Income'));
const Reviews = lazy(() => import('./pages/Host/Reviews'));
const HostVans = lazy(() => import('./pages/Host/HostVans'));
const HostVansDetails = lazy(() => import('./pages/Host/HostVansDetails'));


import '../server'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="vans">
          <Route index element={<Vans />} />
          <Route path=":id" element={<VansDetail />} />
        </Route>
    
        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="vans" element={<HostVans />} />
          <Route path="vans/:id" element={<HostVansDetails />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
