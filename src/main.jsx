import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Test from './pages/Test'
import Index from './pages/Index'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <Index />
      },
      {
        path: "test",
        element: <Test />
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
