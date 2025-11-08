import React, { useEffect, useRef, useState } from 'react';
import { X, Save, Plus, Trash2, Image as ImageIcon } from 'lucide-react';

const fileToDataUrl = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

const AdminPanel = ({ isOpen, onClose, content, setContent, onSave }) => {
  const dropZoneRef = useRef(null);
  const [dragIndex, setDragIndex] = useState(null);

  useEffect(() => {
    const dz = dropZoneRef.current;
    if (!dz) return;

    const onDragOver = (e) => {
      e.preventDefault();
      dz.classList.add('ring-2', 'ring-yellow-400');
    };
    const onDragLeave = () => dz.classList.remove('ring-2', 'ring-yellow-400');
    const onDrop = async (e) => {
      e.preventDefault();
      dz.classList.remove('ring-2', 'ring-yellow-400');
      const files = Array.from(e.dataTransfer.files || []);
      const image = files.find((f) => f.type.startsWith('image/'));
      if (image) {
        const dataUrl = await fileToDataUrl(image);
        setContent((prev) => ({ ...prev, heroBackground: dataUrl }));
      }
    };

    dz.addEventListener('dragover', onDragOver);
    dz.addEventListener('dragleave', onDragLeave);
    dz.addEventListener('drop', onDrop);
    return () => {
      dz.removeEventListener('dragover', onDragOver);
      dz.removeEventListener('dragleave', onDragLeave);
      dz.removeEventListener('drop', onDrop);
    };
  }, [setContent]);

  const handleImageReplace = async (id, file) => {
    if (!file) return;
    const dataUrl = await fileToDataUrl(file);
    setContent((prev) => ({
      ...prev,
      projects: prev.projects.map((p) => (p.id === id ? { ...p, image: dataUrl } : p)),
    }));
  };

  const addProject = () => {
    const id = crypto.randomUUID();
    setContent((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          id,
          title: 'New Project',
          description: 'Describe your work',
          image: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&w=1600&auto=format&fit=crop',
        },
      ],
    }));
  };

  const removeProject = (id) => {
    setContent((prev) => ({ ...prev, projects: prev.projects.filter((p) => p.id !== id) }));
  };

  const onDragStart = (index) => setDragIndex(index);
  const onDragOver = (e) => e.preventDefault();
  const onDropItem = (index) => {
    if (dragIndex === null || dragIndex === index) return;
    setContent((prev) => {
      const arr = [...prev.projects];
      const [moved] = arr.splice(dragIndex, 1);
      arr.splice(index, 0, moved);
      return { ...prev, projects: arr };
    });
    setDragIndex(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex">
      <div className="flex-1 bg-black/50" onClick={onClose} />
      <aside className="w-full max-w-md bg-neutral-950 border-l border-white/10 h-full overflow-y-auto">
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <h3 className="text-neutral-100 font-semibold">Live Editor</h3>
          <div className="flex items-center gap-2">
            <button onClick={onSave} className="px-3 py-1.5 rounded-md bg-yellow-400 text-neutral-900 font-medium hover:bg-yellow-300"> <Save className="h-4 w-4 inline mr-1"/> Save</button>
            <button onClick={onClose} className="p-2 rounded-md bg-neutral-900 text-neutral-200 hover:bg-neutral-800 border border-white/10" aria-label="Close"><X className="h-4 w-4" /></button>
          </div>
        </div>

        <div className="p-4 space-y-6">
          <div>
            <label className="block text-sm text-neutral-400 mb-2">Site name</label>
            <input
              className="w-full rounded-md bg-neutral-900 border border-white/10 px-3 py-2 text-neutral-100"
              value={content.siteName}
              onChange={(e) => setContent((p) => ({ ...p, siteName: e.target.value }))}
            />
          </div>

          <div>
            <h4 className="text-neutral-200 font-medium mb-2">Hero</h4>
            <label className="block text-sm text-neutral-400 mb-1">Title</label>
            <input
              className="w-full rounded-md bg-neutral-900 border border-white/10 px-3 py-2 text-neutral-100 mb-2"
              value={content.heroTitle}
              onChange={(e) => setContent((p) => ({ ...p, heroTitle: e.target.value }))}
            />
            <label className="block text-sm text-neutral-400 mb-1">Subtitle</label>
            <textarea
              className="w-full rounded-md bg-neutral-900 border border-white/10 px-3 py-2 text-neutral-100"
              rows={3}
              value={content.heroSubtitle}
              onChange={(e) => setContent((p) => ({ ...p, heroSubtitle: e.target.value }))}
            />
            <div ref={dropZoneRef} className="mt-3 rounded-md border border-dashed border-white/20 bg-neutral-900 p-3 text-neutral-400 text-sm flex items-center gap-2">
              <ImageIcon className="h-4 w-4" /> Drop an image here to set hero background (overrides Spline)
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-neutral-200 font-medium">Projects</h4>
              <button onClick={addProject} className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-neutral-900 text-neutral-200 hover:bg-neutral-800 border border-white/10 text-sm"><Plus className="h-4 w-4"/> Add</button>
            </div>
            <div className="space-y-3">
              {content.projects.map((p, i) => (
                <div key={p.id} draggable onDragStart={() => onDragStart(i)} onDragOver={onDragOver} onDrop={() => onDropItem(i)} className="rounded-md border border-white/10 bg-neutral-900 p-3">
                  <div className="flex items-center gap-3">
                    <img src={p.image} alt="thumb" className="h-12 w-12 object-cover rounded" />
                    <div className="flex-1 grid grid-cols-1 gap-2">
                      <input className="w-full rounded bg-neutral-950 border border-white/10 px-2 py-1 text-neutral-100" value={p.title} onChange={(e) => setContent((prev) => ({ ...prev, projects: prev.projects.map((x) => x.id === p.id ? { ...x, title: e.target.value } : x) }))} />
                      <input className="w-full rounded bg-neutral-950 border border-white/10 px-2 py-1 text-neutral-100" value={p.description} onChange={(e) => setContent((prev) => ({ ...prev, projects: prev.projects.map((x) => x.id === p.id ? { ...x, description: e.target.value } : x) }))} />
                    </div>
                    <div className="flex items-center gap-2">
                      <label className="text-xs text-neutral-300 cursor-pointer">
                        <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageReplace(p.id, e.target.files?.[0] || null)} /> Replace
                      </label>
                      <button onClick={() => removeProject(p.id)} className="p-2 rounded bg-neutral-950 border border-white/10 hover:bg-neutral-800" aria-label="Remove"><Trash2 className="h-4 w-4 text-neutral-300"/></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default AdminPanel;
