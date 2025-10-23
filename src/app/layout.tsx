import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import BasicLayout from '@/components/layouts/BasicLayout'
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Athil Shaji - VLSI & Microsystems Engineer',
  description: 'Professional portfolio of Athil Shaji, VLSI & Microsystems Engineer specializing in microelectronics, ASIC design, and embedded systems.',
  keywords: 'VLSI, Microsystems, Engineer, ASIC, MEMS, Embedded Systems, Electronics, Research',
  authors: [{ name: 'Athil Shaji' }],
  openGraph: {
    title: 'Athil Shaji - VLSI & Microsystems Engineer',
    description: 'Professional portfolio showcasing expertise in VLSI design, MEMS, and embedded systems',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BasicLayout>{children}</BasicLayout>
      </body>
    </html>
  )
}
