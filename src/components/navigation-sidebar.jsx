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
  Music4Icon,
  FlagIcon
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
    image: './avatar1.gif',
    image2: './avatar2.gif',
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",
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
      name: "CTF Playground",
      url: "https://layactf.infy.uk/",
      icon: FlagIcon,
    },
    {
      name: "Discord Music Bot",
      url: "https://github.com/ranseraya/Discord-MusicBot",
      icon: Music4Icon,
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
