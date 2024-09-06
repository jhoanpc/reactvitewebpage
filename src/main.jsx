import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './routes/root.jsx'
import ErrorPage from './error-page.jsx'
import PersonForm from './app/credit/PersonForm.jsx'
import PersonalDetailsForm from './app/credit/PersonalDetailsForms.jsx'

import Activity from './app/credit/Activity.jsx'



const router = createBrowserRouter([{
  path:'/',
  element: <Root/>,
  errorElement:<ErrorPage/>
},{
  path: "creditos",
  element:  <PersonForm />,
  errorElement:<ErrorPage/>
},{
  path: "/details/:id",
  element: <PersonalDetailsForm />,
  errorElement:<ErrorPage/>
},{
  path: "/activity/:id",
  element: <Activity />,
  errorElement:<ErrorPage/>
}
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
