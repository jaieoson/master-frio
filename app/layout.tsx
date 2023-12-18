import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Robô Whatsapp',
  description: 'Automatize atendimento no whatsapp da sua empresa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[url('/fundo.jpg')] bg-no-repeat bg-cover ">
        {children}
      </div>
      </body>
    </html>
  )
}
