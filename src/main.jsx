import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route , RouterProvider } from 'react-router-dom'
import SignIn from './components/SignIn.jsx'
import HomePage from './HomePage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<HomePage/>}/>
      <Route path='signin' element={<SignIn/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>
  </StrictMode>,
)
