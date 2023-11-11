import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { ThemeProvider } from "@/components/theme-provider"
import ClientProviders from '@/components/ui/ClientProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Polyglotalk: -chatapp',
  description: 'Crafted with heart and head in hand',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClientProviders>
    <html lang="en">
      <body>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Header />
        <div>
        {children}
        </div>
        </ThemeProvider>
        </body>
    </html>
    </ClientProviders>
  )
}
