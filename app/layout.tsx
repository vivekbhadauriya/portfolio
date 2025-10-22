import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ThemeProvider } from '../contexts/ThemeContext'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Vivek Bhadauriya | Full Stack Developer | Python | LLM | MERN',
  description: 'Portfolio of Vivek Bhadauriya - Full Stack Developer specializing in MERN stack, Python, and LLM integration. Building intelligent, scalable web applications.',
  keywords: 'Vivek Bhadauriya, Full Stack Developer, Python, LLM, MERN, React, Node.js, AI, Machine Learning, Web Development',
  authors: [{ name: 'Vivek Bhadauriya' }],
  creator: 'Vivek Bhadauriya',
  openGraph: {
    title: 'Vivek Bhadauriya | Full Stack Developer',
    description: 'Portfolio of Vivek Bhadauriya - Full Stack Developer specializing in MERN stack, Python, and LLM integration.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vivek Bhadauriya | Full Stack Developer',
    description: 'Portfolio of Vivek Bhadauriya - Full Stack Developer specializing in MERN stack, Python, and LLM integration.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-dm-sans antialiased">
        <ThemeProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
