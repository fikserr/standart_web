import React from 'react'
import UserNavbar from '../components/shared/UserNavbar'
import Footer from '../components/shared/Footer'


const Layout = ({ children }) => {
  return (
    <div>
      <UserNavbar/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout