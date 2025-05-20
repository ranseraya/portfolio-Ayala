"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import {NavProfile} from "./nav-profile"
import logo from '@/assets/profile2.jpg'
// This is sample data.
const data = {
  user: {
    name: "Ayala Septama Rahanda",
    email: "ayalarahanda0@gmail.com",
    role: "Administrator",
    avatar: "/",
    image: '/profile2.jpg',
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "About",
      url: "/about",
      icon: Bot,
    },
    {
      title: "Projects",
      url: "/projects",
      icon: BookOpen,
    },
    {
      title: "Certifications",
      url: "/certifications",
      icon: Settings2,
      // items: [
      //   {
      //     title: 'Certifications',
      //     url: '/certifications#cert'
      //   },
      //   {
      //     title: 'Achievements',
      //     url: '/certifications#cert'
      //   },
      //   {
      //     title: 'Badge',
      //     url: '/certifications#cert'
      //   },
      // ]
    },
    {
      title: "Blog",
      url: "/blog",
      icon: Settings2,

    },
    {
      title: "Tools & Skills",
      url: "/skills",
      icon: Settings2,
    },
    {
      title: "Contact Me",
      url: "/contact",
      icon: Settings2,
    },
  ],
  projects: [
    {
      name: "Georecomendation",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function NavigationSidebar({
  ...props
}) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/* <TeamSwitcher teams={data.teams} /> */}
        <NavProfile user={data.user}/>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
