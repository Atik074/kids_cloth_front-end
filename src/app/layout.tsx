import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css' 
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import Provider from '@/lib/Providers/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kidz-Cloths'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider>
      <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
              {children}
        </AppRouterCacheProvider>
      
        </body>
    </html>
    </Provider>
  )
}
