import { motion } from 'framer-motion'
import { Image as ImageIcon, Film, Wand2 } from 'lucide-react'

export default function WorkShowcase({ projects }) {
  return (
    <section id="work" className="py-24 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Selected Work</h2>
            <p className="text-neutral-400 mt-2">A mix of brand, 3D and generative projects</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-sm hover:shadow-lg hover:shadow-yellow-400/10"
            >
              <img src={p.img} alt={p.title} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="p-4">
                <div className="text-xs uppercase tracking-wide text-neutral-400">{p.tag}</div>
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl border border-white/10 bg-neutral-900 p-4 flex items-center gap-3 text-neutral-200"><Wand2 size={18}/> Generative design</div>
          <div className="rounded-xl border border-white/10 bg-neutral-900 p-4 flex items-center gap-3 text-neutral-200"><ImageIcon size={18}/> 3D & visuals</div>
          <div className="rounded-xl border border-white/10 bg-neutral-900 p-4 flex items-center gap-3 text-neutral-200"><Film size={18}/> Motion & reels</div>
        </div>
      </div>
    </section>
  )
}
