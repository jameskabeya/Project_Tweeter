import React, { Children, Profiler } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Myicoment from './assets/Myicoment.jsx'
import Setting from './Setting.jsx'
import OneTweet from './Onetweet.jsx'
import Notification from './Profil.jsx'
import Siderbar from './Siderbar.jsx'
import Trendline from './Trendline.jsx'
import Homeline from './Homeline.jsx'
import Message from './Message.jsx'
import LogInAuth from './LogInAuth.jsx'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <><LogInAuth /></>
  },
  {
    //   
    path: "/",
    element: <div className='flex justify-center m-auto'><Siderbar /><Outlet /><Trendline /></div>,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/profil",
        element: <Notification />,
      },
      {
        path: "/Messages",
        element: <Message />,
      },
      {
        path: "/Messages",
        element: <Notification />,
      },
      {
        path: "/Messages",
        element: <Notification />,
      },
      {
        path: "/Messages",
        element: <Notification />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
