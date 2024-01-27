import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

//these 2 are fonts we have used.
const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'], weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'ShopSpy',
  description: 'Effortlessly track and save on online purchases with our smart price monitoring tool. Start maximizing your savings now!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='max-w-10xl mx-auto'>
          <Navbar/>
        {children}
        </main>
      </body>
    </html>
  )
}
