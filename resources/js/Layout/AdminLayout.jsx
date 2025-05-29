import { AppSidebar } from "@shared/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@ui/sidebar"

export default function Layout({ children }) {
  return (
    <SidebarProvider >
    <AppSidebar />
    <main >
      <SidebarTrigger />
      {children}
    </main>
  </SidebarProvider>
  )
}