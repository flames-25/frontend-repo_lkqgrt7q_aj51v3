import { useState, useEffect } from 'react'
import { X, Save, Plus, Trash2 } from 'lucide-react'

export default function AdminPanel({ open, onClose, content, onChange }) {
  const [local, setLocal] = useState(content)

  useEffect(() => {
    setLocal(content)
  }, [content])

  function handleField(path, value) {
    const next = { ...local }
    // simple path setter: supports one level or arrays with index
    const [key, idx, sub] = path.split('.')
    if (idx && sub) {
      next[key][Number(idx)][sub] = value
    } else if (idx) {
      next[key][Number(idx)] = value
    } else {
      next[key] = value
    }
    setLocal(next)
  }

  function addProject() {
    const next = { ...local }
    next.projects = next.projects.concat({ title: 'New Project', tag: 'Tag', img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop' })
    setLocal(next)
  }

  function removeProject(i) {
    const next = { ...local }
    next.projects = next.projects.filter((_, idx) => idx !== i)
    setLocal(next)
  }

  function save() {
    onChange(local)
    try {
      localStorage.setItem('portfolio_content', JSON.stringify(local))
    } catch {}
    onClose()
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-end bg-black/60">
      <div className="h-full w-full max-w-xl overflow-y-auto bg-neutral-900 text-neutral-100 shadow-2xl">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-neutral-900/80 px-4 py-3 backdrop-blur">
          <h3 className="text-lg font-semibold">Admin Panel</h3>
          <div className="flex items-center gap-2">
            <button onClick={save} className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-400"><Save size={16}/> Save</button>
            <button onClick={onClose} className="rounded-lg border border-white/10 px-3 py-2 text-sm hover:bg-white/5"><X size={16}/></button>
          </div>
        </div>

        <div className="space-y-8 p-4">
          <section>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">Hero</h4>
            <div className="mt-3 space-y-3">
              <label className="block">
                <span className="text-xs text-neutral-400">Title</span>
                <input value={local.heroTitle} onChange={(e)=>handleField('heroTitle', e.target.value)} className="mt-1 w-full rounded-md border border-white/10 bg-neutral-800 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"/>
              </label>
              <label className="block">
                <span className="text-xs text-neutral-400">Subtitle</span>
                <textarea rows={3} value={local.heroSubtitle} onChange={(e)=>handleField('heroSubtitle', e.target.value)} className="mt-1 w-full rounded-md border border-white/10 bg-neutral-800 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"/>
              </label>
            </div>
          </section>

          <section>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">Projects</h4>
            <div className="mt-3 space-y-4">
              {local.projects.map((p, i) => (
                <div key={i} className="rounded-lg border border-white/10 bg-neutral-800 p-3">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-neutral-200">Project {i+1}</div>
                    <button onClick={()=>removeProject(i)} className="rounded-md p-1.5 text-neutral-400 hover:bg-white/5 hover:text-red-400"><Trash2 size={16}/></button>
                  </div>
                  <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <label className="text-xs text-neutral-400">Title<input value={p.title} onChange={(e)=>handleField(`projects.${i}.title`, e.target.value)} className="mt-1 w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"/></label>
                    <label className="text-xs text-neutral-400">Tag<input value={p.tag} onChange={(e)=>handleField(`projects.${i}.tag`, e.target.value)} className="mt-1 w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"/></label>
                    <label className="col-span-1 sm:col-span-2 text-xs text-neutral-400">Image URL<input value={p.img} onChange={(e)=>handleField(`projects.${i}.img`, e.target.value)} className="mt-1 w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"/></label>
                  </div>
                </div>
              ))}
              <button onClick={addProject} className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-neutral-800 px-3 py-2 text-sm hover:bg-white/5"><Plus size={16}/> Add project</button>
            </div>
          </section>

          <section>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">Services</h4>
            <div className="mt-3 space-y-3">
              {local.services.map((s, i) => (
                <div key={i} className="grid gap-2 rounded-lg border border-white/10 bg-neutral-800 p-3">
                  <label className="text-xs text-neutral-400">Title<input value={s.title} onChange={(e)=>handleField(`services.${i}.title`, e.target.value)} className="mt-1 w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"/></label>
                  <label className="text-xs text-neutral-400">Description<textarea rows={2} value={s.desc} onChange={(e)=>handleField(`services.${i}.desc`, e.target.value)} className="mt-1 w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"/></label>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
