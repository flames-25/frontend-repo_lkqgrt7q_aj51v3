import React from 'react';
import { Settings } from 'lucide-react';

const Navbar = ({ onOpenAdmin, siteName = 'Portfolio' }) => {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded bg-yellow-400" />
          <span className="text-neutral-100 font-semibold tracking-tight">{siteName}</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-neutral-300">
          <a href="#work" className="hover:text-yellow-400 transition">Work</a>
          <a href="#services" className="hover:text-yellow-400 transition">Services</a>
          <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
        </nav>
        <button
          onClick={onOpenAdmin}
          className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-neutral-800 text-neutral-200 hover:bg-neutral-700 border border-white/10 transition"
          aria-label="Open editor"
        >
          <Settings className="h-4 w-4" />
          <span className="hidden sm:inline">Edit Site</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
