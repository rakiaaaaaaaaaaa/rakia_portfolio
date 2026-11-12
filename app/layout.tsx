import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rakia Souei | AI & Data Science Portfolio',
  description: 'Portfolio of Rakia Souei, a Software Engineer specializing in Artificial Intelligence and Data Science, with completed MITACS Globalink research experience in predictive modeling and explainable AI.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
