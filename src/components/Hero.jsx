import Spline from '@splinetool/react-spline'
import { ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero({ title, subtitle }) {
  return (
    <section id="hero" className="relative min-h-[92vh] w-full pt-20">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.65)_70%)]" />

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center py-24">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-3 py-1 text-xs font-medium text-white/90 shadow-sm">
                <Sparkles size={14} /> AI Graphics Designer
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(255,215,0,0.15)]">
                {title}
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-5 text-neutral-300 text-lg max-w-2xl">
                {subtitle}
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-yellow-400 text-neutral-900 px-5 py-3 text-sm font-semibold hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400/30">
                  View Work <ArrowRight size={16} />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur text-white px-5 py-3 text-sm font-semibold border border-white/10 hover:bg-white/15">
                  Start a Project
                </a>
              </motion.div>
            </div>
            <div className="lg:col-span-5" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-950 to-transparent" />
    </section>
  )
}
