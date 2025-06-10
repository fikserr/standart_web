import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar"
import { MdDashboard, MdAllInbox, MdLogout, MdCreateNewFolder   } from "react-icons/md";
import { ImUsers } from "react-icons/im";
import { VscChecklist } from "react-icons/vsc";
import { BsClipboard2CheckFill, BsCollectionFill } from "react-icons/bs";
import { Link } from "@inertiajs/react";
 
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
    title: "Add Product",
    url: "/admin-add-product",
    icon: MdCreateNewFolder,
  },
  {
    title: "Order Lists",
    url: "/admin-order-lists",
    icon: BsClipboard2CheckFill,
  },
  {
    title: "Product Stock",
    url: "/admin-productStock",
    icon: BsCollectionFill,
  },
  {
    title: "Users",
    url: "/admin-users",
    icon: ImUsers,
  },
  {
    title: "Log out",
    url: "/",
    icon: MdLogout,
  }
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <Link href={"/admin-dashboard"}><SidebarGroupLabel style={{padding: "30px", fontSize: "30px", color: "black"}}><span style={{color: "blue"}}>Admin</span> Panel</SidebarGroupLabel></Link>
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
