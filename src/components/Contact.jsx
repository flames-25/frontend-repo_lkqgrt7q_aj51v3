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
    <section id="contact" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Let’s collaborate</h2>
            <p className="mt-2 text-gray-600">Share your idea, timeline, and goals. I’ll get back within 24 hours.</p>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li>• Available for freelance and long-term collaborations</li>
              <li>• Based in EU, working worldwide</li>
              <li>• Languages: EN, ES</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Name</label>
                <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium text-gray-700">Project details</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={5} required className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20" />
            </div>
            <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-semibold hover:bg-black">
              Send inquiry <Send size={16} />
            </button>
            {sent && (
              <p className="mt-3 text-sm text-emerald-600">Thanks! Your message has been recorded for this demo.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
