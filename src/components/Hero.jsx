import Spline from '@splinetool/react-spline'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full pt-20">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center py-24">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/60 backdrop-blur px-3 py-1 text-xs font-medium text-gray-800 shadow-sm">
                <Sparkles size={14} /> AI Graphics Designer
              </div>
              <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
                Playful. Interactive. Modern visuals powered by AI.
              </h1>
              <p className="mt-5 text-gray-700 text-lg max-w-xl">
                I craft brand identities, 3D scenes, and generative visuals that move people. Explore selected work and services below.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-semibold hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-900/20">
                  View Work <ArrowRight size={16} />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur text-gray-900 px-5 py-3 text-sm font-semibold border border-black/10 hover:bg-white">
                  Start a Project
                </a>
              </div>
            </div>
            <div className="lg:col-span-6" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
