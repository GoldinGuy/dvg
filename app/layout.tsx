import type React from "react"
import type { Metadata } from "next"
import { Cinzel, Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" })

export const metadata: Metadata = {
  title: "Duke Venture Group",
  description:
    "Duke University's premier student-run venture capital organization offering hands-on experience in sourcing, evaluation, and strategic support of early-stage startups.",
  openGraph: {
    title: "Duke Venture Group",
    description:
      "Duke University's premier student-run venture capital organization offering hands-on experience in sourcing, evaluation, and strategic support of early-stage startups.",
    images: [
      {
        url: "/images/hero-arches.jpg",
        width: 1200,
        height: 630,
        alt: "Duke Venture Group - Duke University Campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Duke Venture Group",
    description:
      "Duke University's premier student-run venture capital organization offering hands-on experience in sourcing, evaluation, and strategic support of early-stage startups.",
    images: ["/images/hero-arches.jpg"],
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
      <body className={`${inter.className} ${cinzel.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navigation />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
