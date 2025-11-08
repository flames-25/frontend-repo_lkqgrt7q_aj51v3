import { useState } from 'react'
import { Sparkles, Github, Instagram, Globe } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" className="flex items-center gap-2">
            <span className="inline-grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-tr from-fuchsia-500 to-blue-500 text-white">
              <Sparkles size={18} />
            </span>
            <span className="font-semibold tracking-tight">AIGraphics</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <a href="#work" className="hover:text-gray-900">Work</a>
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
            <div className="h-6 w-px bg-gray-200" />
            <div className="flex items-center gap-4 text-gray-700">
              <a href="#" aria-label="Website" className="hover:text-gray-900"><Globe size={18} /></a>
              <a href="#" aria-label="GitHub" className="hover:text-gray-900"><Github size={18} /></a>
              <a href="#" aria-label="Instagram" className="hover:text-gray-900"><Instagram size={18} /></a>
            </div>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-2 text-sm font-medium text-gray-700">
            <a href="#work" className="py-2">Work</a>
            <a href="#services" className="py-2">Services</a>
            <a href="#contact" className="py-2">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
