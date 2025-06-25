import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "./print-styles.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rakia Souei- Software Engineer | Portfolio",
  description:
    "Passionate Software Engineer with 5+ years of experience building scalable web applications. Specializing in React, Node.js, and cloud technologies.",
  keywords: ["Software Engineer", "React Developer", "Full Stack Developer", "JavaScript", "TypeScript", "Node.js"],
  authors: [{ name: "Alex Johnson" }],
  creator: "Alex Johnson",
  publisher: "Alex Johnson",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexjohnson.dev",
    title: "Alex Johnson - Software Engineer Portfolio",
    description: "Passionate Software Engineer with 5+ years of experience building scalable web applications.",
    siteName: "Alex Johnson Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alex Johnson - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Johnson - Software Engineer Portfolio",
    description: "Passionate Software Engineer with 5+ years of experience building scalable web applications.",
    creator: "@alexjohnson",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3B82F6" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
