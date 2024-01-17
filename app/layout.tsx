import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/global.css'
import ActiveProvider from '@/context/ActiveProvider'
import Nav from '@/components/Nav'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/Footer'
import ThemeButton from '@/components/ThemeButton'
import ThemeProvider from '@/context/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'This is a personal portfolio showing Ahmed Mahmoud skills as a front-end developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className}`}>
        <ThemeProvider>
          <ActiveProvider>
            <Nav />
            {children}
            <Footer />
            <ThemeButton />
            <Toaster position='top-right' />
          </ActiveProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
