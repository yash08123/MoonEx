import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MoonEX - Trusted Multi-Chain DEX Platform',
  description: 'Trade, earn, and own crypto on the all-in-one multi-chain DEX',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

