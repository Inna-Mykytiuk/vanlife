import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans, { loader as vansLoader } from "./pages/Vans/Vans"
import VanDetail, { loader as vanDetailLoader } from "./pages/Vans/VanDetail"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostVans, { loader as hostVanLoader } from "./pages/Host/HostVans"
import HostVanDetails, { loader as hostVanDetailLoader } from "./pages/Host/HostVansDetails"
import HostVanInfo from "./pages/Host/HostVanInfo"
import HostVanPricing from "./pages/Host/HostVanPricing"
import HostVanPhotos from "./pages/Host/HostVanPhotos"
import NotFound from "./pages/NotFound"
import Login, { loader as loginLoader, action as loginAction } from "./pages/Login"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"
import Error from "./components/Error"
// import { requireAuth } from "../utils"

import "../server"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route
      path="login"
      element={<Login />}
      loader={loginLoader}
      action={loginAction}
    />
    <Route
      path="vans"
      element={<Vans />}
      errorElement={<Error />}
      loader={vansLoader}
    />
    <Route
      path="vans/:id"
      element={<VanDetail />}
      loader={vanDetailLoader}
    />

    <Route path="host" element={<HostLayout />}>
      <Route
        index
        element={<Dashboard />}
      // loader={async ({ request }) => await requireAuth(request)}
      />
      <Route
        path="income"
        element={<Income />}
      // loader={async ({ request }) => await requireAuth(request)}
      />
      <Route
        path="reviews"
        element={<Reviews />}
      // loader={async ({ request }) => await requireAuth(request)}
      />
      <Route
        path="vans"
        element={<HostVans />}
        loader={hostVanLoader}
      />
      <Route
        path="vans/:id"
        element={<HostVanDetails />}
        loader={hostVanDetailLoader}
      >
        <Route
          index
          element={<HostVanInfo />}
        // loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="pricing"
          element={<HostVanPricing />}
        // loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="photos"
          element={<HostVanPhotos />}
        // loader={async ({ request }) => await requireAuth(request)}
        />
      </Route>
    </Route>
    <Route path="*" element={<NotFound />} />
  </Route>
))



import '../server'

// const router = createBrowserRouter(createRoutesFromElements(
//   <Route path="/" element={<Layout />}>
//     <Route index element={<Home />} />
//     <Route path="about" element={<About />} />
//     <Route path="login" element={<Login />} />
//     <Route path="vans" element={<Vans />} loader={vansLoader} errorElement={<Error />} />
//     <Route path="vans/:id" element={<VansDetail />} />

//     <Route path="host" element={<HostLayout />}>
//       <Route index element={<Dashboard />} loader={async () => await requireAuth()} />
//       <Route path="income" element={<Income />} loader={async () => await requireAuth()} />
//       <Route path="reviews" element={<Reviews />} loader={async () => await requireAuth()} />

//       <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
//       <Route path="vans/:id" element={<HostVanDetails />} loader={hostVanDetailsLoader}>
//         <Route index element={<HostVanInfo />} />
//         <Route path="pricing" element={<HostVanPricing />} />
//         <Route path="photos" element={<HostVanPhotos />} />
//       </Route>
//     </Route>
//     <Route path="*" element={<NotFound />} />
//   </Route>
// ))

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
