'use client'

import React from 'react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-blue-500/20 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-lg">3D</span>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Billboard
              </span>
            </Link>
            <p className="text-gray-500 text-sm">
              Revolutionary 3D digital experience technology
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Features</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Pricing</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Documentation</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">About</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Privacy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Terms</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} 3D Billboard. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Twitter
              </Link>
              <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                LinkedIn
              </Link>
              <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
