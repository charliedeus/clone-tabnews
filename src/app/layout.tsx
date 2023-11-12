import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    template: '%s | TabNews',
    default: 'TabNews',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt" className={`${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
