import type { Metadata } from 'next'
import './globals.css'
import { Images } from '@/components/Utilis/Images'

export const metadata: Metadata = {
  title: 'prem – Frontend Designer & Developer',
  description: 'Professional portfolio of prem Gilbert, a Frontend UI/UX Designer & Developer',
  icons: {
    icon: Images.logo.src,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

