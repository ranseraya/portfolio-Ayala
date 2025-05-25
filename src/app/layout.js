import { Orbitron, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { NavigationSidebar } from "@/components/navigation-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-tonggle";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  variable: '--font-cyber',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-space-grotesk',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
});

export const metadata = {
  title: "Portofolio Ayala",
  description: "Third Portofolio Website by Ayala",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${orbitron.variable} ${spaceGrotesk.variable} ${spaceMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <NavigationSidebar />
            <SidebarInset>
              <header
                className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear"> {/* group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 */}
                <div className="flex items-center gap-2 px-4"> 
                  <SidebarTrigger className="-ml-1" target="left" />
                  <ModeToggle />
                  <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
                </div>
              </header>
              {children}
            </SidebarInset>
            {/* <div className="w-80 h-screen border"></div> */}
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
