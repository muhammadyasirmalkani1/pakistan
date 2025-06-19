import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ChatSupport } from "@/components/chat-support"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Pakistan Air Defense Forces",
  description: "Official website of Pakistan's Air Defense Forces",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ChatSupport />
        </ThemeProvider>
      </body>
    </html>
  )
}
