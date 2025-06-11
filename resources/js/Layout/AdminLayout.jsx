import { AppSidebar } from "@/components/shared/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";



export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main >
        <SidebarTrigger />
        {children}
        <Toaster />
      </main>
    </SidebarProvider>
  )
}
