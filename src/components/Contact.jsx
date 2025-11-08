import { useState } from 'react'
import { Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Let’s collaborate</h2>
            <p className="mt-2 text-neutral-400">Share your idea, timeline, and goals. I’ll get back within 24 hours.</p>
            <ul className="mt-6 space-y-2 text-neutral-300">
              <li>• Available for freelance and long-term collaborations</li>
              <li>• Based in EU, working worldwide</li>
              <li>• Languages: EN, ES</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-neutral-900 p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-neutral-300">Name</label>
                <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-lg border border-white/10 bg-neutral-800 px-3 py-2 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-yellow-400/30" />
              </div>
              <div>
                <label className="text-sm font-medium text-neutral-300">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-lg border border-white/10 bg-neutral-800 px-3 py-2 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-yellow-400/30" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium text-neutral-300">Project details</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={5} required className="mt-1 w-full rounded-lg border border-white/10 bg-neutral-800 px-3 py-2 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-yellow-400/30" />
            </div>
            <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-full bg-yellow-400 text-neutral-900 px-5 py-3 text-sm font-semibold hover:bg-yellow-300">
              Send inquiry <Send size={16} />
            </button>
            {sent && (
              <p className="mt-3 text-sm text-emerald-400">Thanks! Your message has been recorded for this demo.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
