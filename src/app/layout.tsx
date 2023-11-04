import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/ui/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lego Cabral - Dashboard',
  description: 'Painel administrativo empresa lego cabral transportes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-full flex-col">
            <div className="flex-1">{children}</div>
            <Footer/>
        </div>
      </body>
    </html>
  )
}
