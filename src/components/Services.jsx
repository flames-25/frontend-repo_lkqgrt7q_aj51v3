import React from 'react';
import { motion } from 'framer-motion';
import { Wand2, Image as ImageIcon, Rocket } from 'lucide-react';

const IconMap = {
  design: Wand2,
  imagery: ImageIcon,
  launch: Rocket,
};

const ServiceCard = ({ service }) => {
  const Icon = IconMap[service.icon] || Wand2;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="rounded-xl border border-white/10 bg-neutral-900/60 p-5 hover:bg-neutral-900 transition"
    >
      <div className="h-10 w-10 rounded bg-yellow-400 text-neutral-900 flex items-center justify-center">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-3 text-neutral-100 font-semibold">{service.title}</h3>
      <p className="text-neutral-400 text-sm mt-1">{service.description}</p>
    </motion.div>
  );
};

const Services = ({ services }) => {
  return (
    <section id="services" className="py-16 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-100 mb-8">Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
