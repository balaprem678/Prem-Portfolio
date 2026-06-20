import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'prem – Frontend Designer & Developer',
  description: 'Professional portfolio of prem Gilbert, a Frontend UI/UX Designer & Developer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
