import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Headers from './components/Headers'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import NewLink from './newlink/page'
import { Analytics } from '@vercel/analytics/react'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Developer Helper',
  description: 'Create to help developer to easily access resources without spending much time on finding sites!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primarybg relative`}>
        <Headers/>
        <div className='flex lg:flex-row flex-col gap-5 '> 
        <Sidebar/>      
        {children}
        <Analytics/>
        </div>
        <Footer/>
      </body>
    </html>
  )
}
