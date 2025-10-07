'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import Services from '@/components/Services'
import About from '@/components/About'
import Footer from '@/components/Footer'
import WhatsAppChat from '@/components/EncryptedChat'

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <main className="min-h-screen luxury-gradient">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Footer />
      <WhatsAppChat 
        isOpen={isChatOpen} 
        onToggle={() => setIsChatOpen(!isChatOpen)} 
      />
    </main>
  )
}