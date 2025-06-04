import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Duke Venture Group | Premier Student-Run VC Organization",
  description:
    "Duke University's premier, student-run venture capital organization offering hands-on experience in sourcing, evaluation, and strategic support of early-stage startups.",
  generator: "v0.dev",
  openGraph: {
    title: "Duke Venture Group | Premier Student-Run VC Organization",
    description:
      "Duke University's premier, student-run venture capital organization offering hands-on experience in sourcing, evaluation, and strategic support of early-stage startups.",
    images: [
      {
        url: "/images/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Duke Venture Group - Duke University Campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Duke Venture Group | Premier Student-Run VC Organization",
    description:
      "Duke University's premier, student-run venture capital organization offering hands-on experience in sourcing, evaluation, and strategic support of early-stage startups.",
    images: ["/images/banner.jpg"],
  },
  icons: {
    icon: "/images/dvg-logo-white-bg.jpg",
    shortcut: "/images/dvg-logo-white-bg.jpg",
    apple: "/images/dvg-logo-white-bg.jpg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navigation />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
