import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"
import PageTransition from "@/components/page-transition"
import CameraMode from "@/components/camera-mode"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "framebuzzmedia | Professional Videography & Visual Storytelling",
  description: "Professional videographer capturing life one frame at a time through cinematic storytelling",
  keywords: "videographer, cinematography, visual storytelling, video production, portfolio",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
<html lang="en" suppressHydrationWarning>
<body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <CustomCursor />
          <PageTransition>
            <Navigation />
            {children}
            <Footer />
            <CameraMode />
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  )
}
