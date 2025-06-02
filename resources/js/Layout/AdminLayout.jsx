import { AppSidebar } from "@/components/shared/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";



export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main >
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
