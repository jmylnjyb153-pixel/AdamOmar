'use client'

import React from 'react'

const technologies = [
  {
    name: 'Three.js',
    description: 'Advanced 3D graphics rendering',
    category: 'Graphics',
  },
  {
    name: 'WebGL',
    description: 'GPU-accelerated graphics',
    category: 'Graphics',
  },
  {
    name: 'GSAP',
    description: 'Smooth animations and transitions',
    category: 'Animation',
  },
  {
    name: 'React',
    description: 'Dynamic UI components',
    category: 'Frontend',
  },
  {
    name: 'Next.js',
    description: 'Server-side rendering and optimization',
    category: 'Framework',
  },
  {
    name: 'TypeScript',
    description: 'Type-safe development',
    category: 'Language',
  },
]

export default function TechStack() {
  return (
    <section id="technology" className="py-20 px-4 bg-gradient-to-b from-black to-blue-950/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Technology Stack
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Built with cutting-edge web technologies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-black border border-blue-500/30 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 group"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {tech.name}
                  </h3>
                  <span className="inline-block mt-2 px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">
                    {tech.category}
                  </span>
                </div>
              </div>
              <p className="text-gray-400">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
