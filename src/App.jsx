import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import {NavBar} from './components/NavBar'

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

function App() {


  return (
    <>
      <NavBar/>

      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </>
    
  )
}

export default App
