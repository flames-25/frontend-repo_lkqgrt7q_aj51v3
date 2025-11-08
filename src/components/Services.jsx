import { Palette, Sparkles, Rocket, Figma } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <Palette size={18} />,
      title: 'Brand & Identity',
      desc: 'Logo suites, color systems, type, and guidelines with an AI-first process.'
    },
    {
      icon: <Sparkles size={18} />,
      title: 'AI Visuals & Prompts',
      desc: 'Custom prompt libraries, image sets, and pipelines for your brand.'
    },
    {
      icon: <Rocket size={18} />,
      title: '3D Landing Experiences',
      desc: 'Spline-powered, interactive hero scenes that convert and delight.'
    }
  ]

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Services</h2>
        <p className="text-gray-600 mt-2 max-w-2xl">I help startups and creators stand out with distinctive, on-brand visuals and interactive moments.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-grid h-10 w-10 place-items-center rounded-lg bg-gray-900 text-white">
                {s.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
