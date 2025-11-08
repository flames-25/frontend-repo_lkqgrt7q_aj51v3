import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = ({ title, subtitle, backgroundUrl }) => {
  return (
    <section className="relative min-h-[70vh] lg:min-h-[80vh] w-full bg-neutral-950 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene={backgroundUrl} style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.1),rgba(0,0,0,0.75))]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-[70vh] lg:min-h-[80vh]">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-100 tracking-tight"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-4 text-lg sm:text-xl text-neutral-300"
          >
            {subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 flex items-center gap-3"
          >
            <a href="#work" className="px-5 py-2.5 rounded-md bg-yellow-400 text-neutral-900 font-medium hover:bg-yellow-300 transition">
              Explore Work
            </a>
            <a href="#contact" className="px-5 py-2.5 rounded-md bg-neutral-800 text-neutral-200 hover:bg-neutral-700 border border-white/10 transition">
              Contact
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
