import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './screen/about.jsx'
import Contact from './screen/contact.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



// Suggested code may be subject to a license. Learn more: ~LicenseLog:346677894.
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },{
    path: '/about',
    element: <About />,
  },{
    path: '/contact',
    element: < Contact/>,
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} >
    <StrictMode>
      <App />
    </StrictMode>,
   </RouterProvider>
  
)
