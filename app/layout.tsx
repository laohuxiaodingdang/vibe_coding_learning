import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Sidebar } from "@/components/sidebar"
import { Player } from "@/components/player"
import { Header } from "@/components/header"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Cyberpunk Portfolio",
  description: "A neo-brutalist cyberpunk portfolio",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans bg-blue-950 text-white`}>
        <div className="flex h-screen flex-col">
          <div className="flex flex-1 overflow-hidden">
            <Sidebar />
            <main className="flex-1 overflow-y-auto">
              <Header />
              <div className="p-6">
                {children}
              </div>
            </main>
          </div>
          <Player />
        </div>
      </body>
    </html>
  )
}