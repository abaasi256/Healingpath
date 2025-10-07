import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'HealingPath - Professional Abortion Clinic & Reproductive Health Services',
  description: 'Safe, confidential abortion care and comprehensive reproductive health services in a private, luxurious clinic environment. Professional, compassionate medical care with complete privacy.',
  keywords: 'abortion clinic, safe abortion, reproductive health, women\'s health, abortion services, confidential healthcare, pregnancy termination, reproductive care, abortion procedure, women\'s clinic',
  icons: {
    icon: [
      { url: '/images/favicon.jpeg' },
      { url: '/images/favicon.jpeg', sizes: '16x16', type: 'image/jpeg' },
      { url: '/images/favicon.jpeg', sizes: '32x32', type: 'image/jpeg' },
    ],
    shortcut: '/images/favicon.jpeg',
    apple: [
      { url: '/images/favicon.jpeg' },
      { url: '/images/favicon.jpeg', sizes: '180x180', type: 'image/jpeg' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}