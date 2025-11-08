import { useState } from 'react'
import { Sparkles, Github, Instagram, Globe } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-neutral-950/60 border-b border-white/10 text-neutral-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" className="flex items-center gap-2">
            <span className="inline-grid h-8 w-8 place-items-center rounded-lg bg-yellow-400 text-neutral-900">
              <Sparkles size={18} />
            </span>
            <span className="font-semibold tracking-tight">AIGraphics</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <div className="h-6 w-px bg-white/10" />
            <div className="flex items-center gap-4 text-neutral-300">
              <a href="#" aria-label="Website" className="hover:text-white"><Globe size={18} /></a>
              <a href="#" aria-label="GitHub" className="hover:text-white"><Github size={18} /></a>
              <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram size={18} /></a>
            </div>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-300 hover:bg-white/5"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-neutral-950/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-2 text-sm font-medium text-neutral-300">
            <a href="#work" className="py-2">Work</a>
            <a href="#services" className="py-2">Services</a>
            <a href="#contact" className="py-2">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
