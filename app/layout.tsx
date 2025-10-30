import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Educent Pro - Educational Management Platform',
  description: 'Comprehensive multi-panel educational management system with real-time synchronization',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}