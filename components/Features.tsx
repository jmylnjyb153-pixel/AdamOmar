'use client'

import React from 'react'

const features = [
  {
    title: 'Interactive 3D Display',
    description: 'Engage audiences with stunning 3D graphics and animations',
    icon: '🎮',
  },
  {
    title: 'Real-time Updates',
    description: 'Update content instantly across all displays',
    icon: '⚡',
  },
  {
    title: 'AI-Powered Analytics',
    description: 'Track viewer engagement and optimize content performance',
    icon: '📊',
  },
  {
    title: 'Multi-Format Support',
    description: 'Display videos, images, and live feeds seamlessly',
    icon: '📹',
  },
  {
    title: 'Weather Adaptive',
    description: 'Automatic brightness and color adjustment for any condition',
    icon: '🌤️',
  },
  {
    title: 'Cloud Management',
    description: 'Manage all billboards from a centralized dashboard',
    icon: '☁️',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 px-4 bg-black">
      {/* Background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to create immersive digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-lg bg-gradient-to-br from-blue-950/20 to-cyan-950/20 border border-blue-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
