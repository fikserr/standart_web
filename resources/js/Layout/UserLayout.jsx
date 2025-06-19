import UserNavbar from '../components/shared/UserNavbar'
import Footer from '../components/shared/Footer'
import { usePage } from '@inertiajs/react'

const Layout = ({ children }) => {
  const { url } = usePage()
  const hidePath = ['/login', '/register']

  const shouldHideNavbar = hidePath.includes(url)

  return (
    <div>
      {!shouldHideNavbar && <UserNavbar />}
      {children}
      {!shouldHideNavbar && <Footer />}
    </div>
  )
}

export default Layout
