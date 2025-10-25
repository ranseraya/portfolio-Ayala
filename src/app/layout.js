import { Orbitron, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { NavigationSidebar } from "@/components/navigation-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from '@/components/header';
import {
  SidebarInset,
  SidebarProvider,
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
  verification: {
    google: 'hhSa4pKngke6Sgi1WG2618A-Kntyfi6JF96Mnw705PQ', 
  },
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
              <Header />
              {children}
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
