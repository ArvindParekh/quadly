import type React from "react"
import type { Metadata } from "next"
import { Inter as FontSans, Inter } from "next/font/google"
import { Space_Grotesk as FontSansSpaceGrotesque } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Providers from "./providers"
import { Analytics } from '@vercel/analytics/next';

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const fontSpaceGrotesk = FontSansSpaceGrotesque({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Quadly",
  description: "Connect with fellow students through shared interests",
  icons: {
    icon: "/icon.svg"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSpaceGrotesk.className)}>
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
