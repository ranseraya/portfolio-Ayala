"use client"

import {
  Monitor,
  User,
  FolderCodeIcon,
  AwardIcon,
  FilePenLineIcon,
  WrenchIcon,
  MailsIcon,
  Frame,
  Map,
  PieChart,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import {NavProfile} from "./nav-profile"
const data = {
  user: {
    name: "Ayala Septama Rahanda",
    email: "ayalarahanda0@gmail.com",
    role: "Web Developer",
    avatar: "/",
    image: '/dark icon.png',
    image2: '/white icon.png',
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Monitor,
      isActive: true,
    },
    {
      title: "About",
      url: "/about",
      icon: User,
    },
    {
      title: "Projects",
      url: "/projects",
      icon: FolderCodeIcon,
    },
    {
      title: "Certifications",
      url: "/certifications",
      icon: AwardIcon
    },
    {
      title: "Blog",
      url: "/blog",
      icon: FilePenLineIcon,
    },
    {
      title: "Tools & Skills",
      url: "/skills",
      icon: WrenchIcon,
    },
    {
      title: "Contact Me",
      url: "/contact",
      icon: MailsIcon,
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
    <Sidebar collapsible="icon" {...props} className={"z-10"}>
      <SidebarHeader>
        <NavProfile user={data.user}/>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
