import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
        {/* <Header />
          <div>
              {children}
          </div>
        <Footer/> */}
      
      
      <Header/>
      <Outlet/>
    </>
  )
}

export default Layout
