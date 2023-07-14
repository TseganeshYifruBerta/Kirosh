import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import LandingPage from '@/components/home/landing'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <div className='h-screen'>
      <LandingPage />
    </div>
  )
}
