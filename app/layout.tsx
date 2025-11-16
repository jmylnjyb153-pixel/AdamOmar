import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: '3D Billboard - Interactive Digital Experience',
  description: 'Revolutionary 3D billboard technology for the modern world. Experience immersive digital advertising.',
  openGraph: {
    title: '3D Billboard',
    description: 'Revolutionary 3D billboard technology',
    url: 'https://3dbillboard.com',
    siteName: '3D Billboard',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="bg-black text-white">
        {children}
      </body>
    </html>
  )
}
