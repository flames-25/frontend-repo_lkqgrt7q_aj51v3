import { useState } from 'react'
import { Image as ImageIcon, Film, Wand2 } from 'lucide-react'

const projects = [
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
]

export default function WorkShowcase() {
  const [active, setActive] = useState(0)

  return (
    <section id="work" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Selected Work</h2>
            <p className="text-gray-600 mt-2">A mix of brand, 3D and generative projects</p>
          </div>
          <div className="hidden md:flex gap-2">
            <button onClick={() => setActive((active + projects.length - 1) % projects.length)} className="rounded-full border px-3 py-2 text-sm">Prev</button>
            <button onClick={() => setActive((active + 1) % projects.length)} className="rounded-full border px-3 py-2 text-sm">Next</button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article key={p.title} className={`group relative overflow-hidden rounded-2xl border bg-white shadow-sm ${i === active ? 'ring-2 ring-gray-900' : ''}`}>
              <img src={p.img} alt={p.title} className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="p-4">
                <div className="text-xs uppercase tracking-wide text-gray-500">{p.tag}</div>
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl border p-4 flex items-center gap-3"><Wand2 size={18}/> Generative design</div>
          <div className="rounded-xl border p-4 flex items-center gap-3"><ImageIcon size={18}/> 3D & visuals</div>
          <div className="rounded-xl border p-4 flex items-center gap-3"><Film size={18}/> Motion & reels</div>
        </div>
      </div>
    </section>
  )
}
