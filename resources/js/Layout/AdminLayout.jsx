import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar"

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}