import UserNavbar from '../components/shared/UserNavbar'
import Footer from '../components/shared/Footer'
import { usePage } from '@inertiajs/react'
import { Toaster } from '@/components/ui/toaster'

const Layout = ({ children }) => {
  const { url } = usePage()
  const hidePath = ['/login', '/register']

  const shouldHideNavbar = hidePath.includes(url)

  return (
    <div>
      {!shouldHideNavbar && <UserNavbar />}
      {children}
      <Toaster />
      {!shouldHideNavbar && <Footer />}
    </div>
  )
}

export default Layout
