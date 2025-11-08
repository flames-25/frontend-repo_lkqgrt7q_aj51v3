import React from 'react';
import { motion } from 'framer-motion';

const WorkCard = ({ item, onReplaceImage, onDragStart, draggable }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      draggable={draggable}
      onDragStart={(e) => onDragStart?.(e, item)}
      className="group relative rounded-xl overflow-hidden border border-white/10 bg-neutral-900/60 hover:bg-neutral-900 transition shadow-inner"
    >
      <img
        src={item.image}
        alt={item.title}
        className="h-56 w-full object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-neutral-100 font-semibold">{item.title}</h3>
        </div>
        <p className="text-neutral-400 text-sm mt-1 line-clamp-2">{item.description}</p>
        {onReplaceImage && (
          <label className="mt-3 inline-flex items-center gap-2 text-xs text-neutral-300 cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => onReplaceImage(item.id, e.target.files?.[0] || null)}
            />
            Replace image
          </label>
        )}
      </div>
    </motion.div>
  );
};

const WorkShowcase = ({ projects, onDropReorder, onReplaceImage }) => {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    const raw = e.dataTransfer.getData('text/project');
    if (!raw) return;
    const payload = JSON.parse(raw);
    onDropReorder?.(payload.id);
  };

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData('text/project', JSON.stringify({ id: item.id }));
  };

  return (
    <section id="work" className="py-16 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-100">Selected Work</h2>
          <p className="text-neutral-400 text-sm">Drag cards to reorder. Click label to replace images.</p>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {projects.map((p) => (
            <WorkCard key={p.id} item={p} onReplaceImage={onReplaceImage} onDragStart={handleDragStart} draggable />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;
