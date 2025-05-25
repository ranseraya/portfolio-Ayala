"use client"

import { ChevronRight } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function NavMain({ items }) {
  const rawPathname = usePathname()
  const [pathname, setPathname] = useState(rawPathname)

  useEffect(() => {
    setPathname(rawPathname)
  }, [rawPathname]) // update saat route berubah
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Navigation</SidebarGroupLabel>
      <SidebarMenu className={"gap-2"}>
        {items.map((item) => {
          const isActive = pathname === item.url || pathname.startsWith(item.url + "/");
          return item.items && item.items.length > 0 ? (
            // Jika ada submenu
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={item.isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.title} className={isActive ? 'bg-accent text-accent-foreground' : ''} >
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild>
                          <a href={subItem.url}>
                            <span>{subItem.title}</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ) : (
            // Jika tidak ada submenu
            <SidebarMenuItem key={item.title} className={`relative rounded-lg ${isActive ? 'bg-gradient-to-r from-blue-600 via-transparent to-red-600 shadow-md shadow-blue-500/50' : ''}`} >
              {/* <div className={`w-2 h-full bg-blue-500 absolute -left-2.5 rounded-e-lg ${isActive ? 'block' : 'hidden'} transition-all duration-500`}></div> */}
              {/* <div className={`bg-radial from-blue-400/30 to-tranparent rounded-full h-10 w-10 -left-1 -top-1 absolute ${isActive ? 'hidden' : 'hidden'} transition-all duration-500`}></div> */}
              <SidebarMenuButton tooltip={item.title} asChild>
                <Link href={item.url}>
                  {item.icon && <item.icon />}
                  <span className={isActive ? 'font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white' : ''}>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        }
        )}

      </SidebarMenu>
    </SidebarGroup>
  );
}
