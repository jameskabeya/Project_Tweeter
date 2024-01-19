import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Outlet, createBrowserRouter, } from 'react-router-dom'
import Myicoment from './assets/Myicoment.jsx'
import Setting from './Setting.jsx'
import OneTweet from './Onetweet.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Myicoment><Setting><Outlet></Outlet> </Setting></Myicoment> 
  },
  {
    path: "/Profil",
    element: <Notification/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
