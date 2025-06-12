import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
 QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import Homepage from './routes/Homepage.jsx'
import Postlistpage from './routes/Postlistpage.jsx'
import Write from './routes/Write.jsx'
import LoginPage from './routes/LoginPage.jsx'
import RegisterPage from './routes/RegisterPage.jsx'
import Singlepostpage from './routes/Singlepostpage.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import AuthorPage from './routes/AuthorPage.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import { ToastContainer } from "react-toastify"
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


const queryClient = new QueryClient()



const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/:slug",
    element: <Singlepostpage />
  },
  {
    path: "/posts",
    element: <Postlistpage/>
  },
  {
    path: "/write",
    element: <Write />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/author",
    element: <AuthorPage />
  }
    ]
  }     
 
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ToastContainer position='top-center'/>
      </QueryClientProvider>
    </ClerkProvider>
  
  </StrictMode>,
)
