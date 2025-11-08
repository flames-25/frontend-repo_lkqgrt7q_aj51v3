import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkShowcase from './components/WorkShowcase'
import Services from './components/Services'
import Contact from './components/Contact'
import AdminPanel from './components/AdminPanel'
import { Settings } from 'lucide-react'

const defaultContent = {
  heroTitle: 'Playful. Interactive. Modern visuals powered by AI.',
  heroSubtitle: 'I craft brand identities, 3D scenes, and generative visuals that move people. Explore selected work and services below.',
  projects: [
    {
      title: 'Neon Brand Kit',
      tag: 'Identity',
      img: 'https://images.unsplash.com/photo-1529336953121-c9e9d8a4b4fd?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Generative Posters',
      tag: 'Art Direction',
      img: 'https://images.unsplash.com/photo-1551727974-8af20a3322e1?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Interactive 3D Landing',
      tag: 'Web 3D',
      img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    },
  ],
  services: [
    { title: 'Brand & Identity', desc: 'Logo suites, color systems, type, and guidelines with an AI-first process.' },
    { title: 'AI Visuals & Prompts', desc: 'Custom prompt libraries, image sets, and pipelines for your brand.' },
    { title: '3D Landing Experiences', desc: 'Spline-powered, interactive hero scenes that convert and delight.' },
  ],
}

function App() {
  const [adminOpen, setAdminOpen] = useState(false)
  const [content, setContent] = useState(defaultContent)

  useEffect(() => {
    try {
      const saved = localStorage.getItem('portfolio_content')
      if (saved) setContent(JSON.parse(saved))
    } catch {}
  }, [])

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-inter">
      <Navbar />
      <main>
        <Hero title={content.heroTitle} subtitle={content.heroSubtitle} />
        <WorkShowcase projects={content.projects} />
        <Services services={content.services} />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} AIGraphics — AI Graphics Designer</p>
          <p>Built with Spline, React, and motion.</p>
        </div>
      </footer>

      <button
        onClick={() => setAdminOpen(true)}
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-3 text-sm font-semibold text-neutral-900 shadow-lg hover:bg-yellow-300"
        aria-label="Open admin panel"
      >
        <Settings size={18} /> Edit Site
      </button>

      <AdminPanel
        open={adminOpen}
        onClose={() => setAdminOpen(false)}
        content={content}
        onChange={setContent}
      />
    </div>
  )
}

export default App
