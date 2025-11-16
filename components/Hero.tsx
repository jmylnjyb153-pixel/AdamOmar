'use client'

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const meshRef = useRef<THREE.Mesh | null>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const currentContainer = containerRef.current

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(
      75,
      currentContainer.clientWidth / currentContainer.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 2.5
    cameraRef.current = camera

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })
    renderer.setSize(
      currentContainer.clientWidth,
      currentContainer.clientHeight
    )
    renderer.setClearColor(0x000000, 0.1)
    currentContainer.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Create geometry - Billboard shape
    const geometry = new THREE.BoxGeometry(2, 1.2, 0.1)
    
    // Create material with gradient
    const canvas = document.createElement('canvas')
    canvas.width = 512
    canvas.height = 307
    const ctx = canvas.getContext('2d')!
    
    // Gradient background
    const gradient = ctx.createLinearGradient(0, 0, 512, 307)
    gradient.addColorStop(0, '#0066ff')
    gradient.addColorStop(0.5, '#00ffff')
    gradient.addColorStop(1, '#0033ff')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 512, 307)
    
    // Text
    ctx.fillStyle = '#ffffff'
    ctx.font = 'bold 60px Arial'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('3D BILLBOARD', 256, 140)
    ctx.font = '20px Arial'
    ctx.fillText('Revolutionary Digital Experience', 256, 180)
    
    const texture = new THREE.CanvasTexture(canvas)
    const material = new THREE.MeshPhongMaterial({
      map: texture,
      emissive: 0x0066ff,
      emissiveIntensity: 0.3,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)
    meshRef.current = mesh

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0x0066ff, 1)
    pointLight.position.set(5, 5, 5)
    scene.add(pointLight)

    const pointLight2 = new THREE.PointLight(0x00ffff, 0.8)
    pointLight2.position.set(-5, -5, 5)
    scene.add(pointLight2)

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)

      if (meshRef.current) {
        meshRef.current.rotation.x += 0.002
        meshRef.current.rotation.y += 0.003
        meshRef.current.rotation.z += 0.001
      }

      renderer.render(scene, camera)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      if (!currentContainer) return
      const width = currentContainer.clientWidth
      const height = currentContainer.clientHeight

      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (currentContainer && renderer.domElement.parentNode === currentContainer) {
        currentContainer.removeChild(renderer.domElement)
      }
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  // Mouse interaction
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!meshRef.current) return

      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = -(event.clientY / window.innerHeight) * 2 + 1

      gsap.to(meshRef.current.rotation, {
        x: y * 0.5,
        y: x * 0.5,
        duration: 0.5,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative w-full h-screen pt-16 bg-gradient-to-b from-black via-blue-950/20 to-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* 3D Canvas */}
      <div
        ref={containerRef}
        className="absolute inset-0"
        style={{ height: '100vh' }}
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
        <div className="text-center space-y-6 fade-in-up">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
            3D BILLBOARD
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
            Revolutionary digital experience for the modern world
          </p>
          <div className="flex gap-4 justify-center pointer-events-auto">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105">
              Explore Now
            </button>
            <button className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500/10 transition-all transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-gray-400 text-sm">Scroll to explore</span>
          <svg
            className="w-6 h-6 text-cyan-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
