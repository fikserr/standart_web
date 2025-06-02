import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar"
import { MdDashboard, MdAllInbox, MdLogout  } from "react-icons/md";
import { ImHeart, ImUsers } from "react-icons/im";
import { VscChecklist } from "react-icons/vsc";
import { BsBookshelf } from "react-icons/bs";

const items = [
  {
    title: "Dashboard",
    url: "/admin-dashboard",
    icon: MdDashboard,
  },
  {
    title: "Products",
    url: "/admin-products",
    icon: MdAllInbox ,
  },
  {
    title: "Favorites",
    url: "/admin-favorites",
    icon: ImHeart,
  },
  {
    title: "Order Lists",
    url: "/admin-order-lists",
    icon: VscChecklist,
  },
  {
    title: "Product Stock",
    url: "/admin-productStock",
    icon: BsBookshelf,
  },
  {
    title: "Users",
    url: "/admin-users",
    icon: ImUsers,
  },
  {
    title: "LogOut",
    url: "/",
    icon: MdLogout,
  }
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel style={{padding: "30px", fontSize: "30px", color: "black"}}><span style={{color: "blue"}}>Admin</span> Panel</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}  style={{padding: "5px"}}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon/>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
