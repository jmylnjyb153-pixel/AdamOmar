'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-blue-500/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
            <span className="text-white font-bold text-lg">3D</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
            Billboard
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 items-center">
          <Link
            href="#features"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Features
          </Link>
          <Link
            href="#technology"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Technology
          </Link>
          <Link
            href="#contact"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105">
          Get Started
        </button>
      </nav>
    </header>
  )
}
