"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { Separator } from "./ui/separator";
import { BreadcrumbSeparator } from "./ui/breadcrumb";
import { ModeToggle } from "./mode-toggle";
import { SidebarTrigger } from "./ui/sidebar";

const getPageTitle = (pathname) => {
  switch (pathname) {
    case "/Home":
      return "Dashboard";
    case "/about":
      return "About Me";
    case "/projects":
      return "My Projects";
    case "/certifications":
      return "Certifications";
    case "/blog":
      return "Blog";
    case "/tools-skills":
      return "Tools & Skills";
    case "/contact":
      return "Contact Me";
    default:
      return "Welcome";
  }
};

export function Header() {
  const pathname = usePathname();
  const [headerTitle, setHeaderTitle] = useState("");

  useEffect(() => {
    setHeaderTitle(getPageTitle(pathname));
  }, [pathname]);

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear bg-background px-4 md:px-6 ">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1 cursor-pointer" target="left" />
        <ModeToggle />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        Ayala
        <BreadcrumbSeparator className="block"/>
        {headerTitle}
      </div>
      {/* <div className="w-1/2"></div> */}
    </header>
  );
}
