import { Palette, Sparkles, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Services({ services }) {
  const icons = [<Palette key="p" size={18} />, <Sparkles key="s" size={18} />, <Rocket key="r" size={18} />]

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-neutral-950 to-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Services</h2>
        <p className="text-neutral-400 mt-2 max-w-2xl">I help startups and creators stand out with distinctive, on-brand visuals and interactive moments.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-neutral-900 p-6 shadow-sm hover:shadow-yellow-400/10"
            >
              <div className="inline-grid h-10 w-10 place-items-center rounded-lg bg-yellow-400 text-neutral-900">
                {icons[i % icons.length]}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-neutral-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
