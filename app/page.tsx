'use client'

import React, { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import TechStack from '@/components/TechStack'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <Features />
      <TechStack />
      <CTA />
      <Footer />
    </main>
  )
}
