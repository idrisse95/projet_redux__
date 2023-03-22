import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './idriss/Sidebar'
import { Header } from './victor/Header'

export const LayoutMain = () => {
  return (
    <div>
        <Header />
        <Sidebar />
        <Outlet />
    </div>
  )
}
