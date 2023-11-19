import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Home from './pages/Home'
import Blog from './pages/Blog'
import Contacts from './pages/Contacts'
import Services from './pages/Services'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/home",
        element: <Home/>,

      },
      {
        path: "/blogs",
        element: <Blog/>,

      },
      {
        path: "/services",
        element: <Services/>,

      },
      {
        path: "/contacts",
        element: <Contacts/>,

      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);