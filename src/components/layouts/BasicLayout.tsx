import type { Metadata } from 'next'

import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
export const metadata: Metadata = {
  title: 'PAdhil Shaji Portfolio Website',
  description: 'Professional Portfolio Website For Engineers',
}

export default function BasicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section lang='en'>
      <Navbar />
      {children}
      <Footer />
    </section>
  )
}
