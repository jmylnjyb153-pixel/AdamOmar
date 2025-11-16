'use client'

import React from 'react'

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 px-4 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Ready to Transform Your Digital Presence?
        </h2>

        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join the revolution. Experience the power of 3D billboards and captivate your audience like never before.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105 text-lg">
            Start Your Journey
          </button>
          <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500/10 transition-all transform hover:scale-105 text-lg">
            Schedule Demo
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-500/20">
          <p className="text-gray-500 text-sm">
            Available for enterprise solutions • Support 24/7 • Global deployment
          </p>
        </div>
      </div>
    </section>
  )
}
