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
const HostVanDetails = lazy(() => import('./pages/Host/HostVansDetails'));
const HostVanInfo  = lazy(() => import('./pages/Host/HostVanInfo'));
const HostVanPricing = lazy(() => import('./pages/Host/HostVanPricing'));
const HostVanPhotos = lazy(() => import('./pages/Host/HostVanPhotos'));
const NotFound = lazy(() => import('./pages/NotFound'));



import '../server'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans"element={<Vans />} />
        <Route path="vans/:id" element={<VansDetail />} />

        {/* <Route path="vans">
          <Route index element={<Vans />} />
          <Route path=":id" element={<VansDetail />} />
        </Route> */}
    
        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="vans" element={<HostVans />} />
          <Route path="vans/:id" element={<HostVanDetails />}>
            {/* <Route index element={<HostVansDetails />}  /> */}
            <Route index element={<HostVanInfo />}  />
            <Route path="pricing" element={<HostVanPricing />}  />
            <Route path="photos" element={<HostVanPhotos />}  />
          </Route>
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Route>
    </Routes>
  )
}

export default App
