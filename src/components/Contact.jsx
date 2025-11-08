import React from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-neutral-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-100 mb-8">Let’s build something remarkable</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert('Thanks! I will get back to you shortly.');
          }}
          className="grid grid-cols-1 gap-4"
        >
          <input className="w-full rounded-md bg-neutral-900 border border-white/10 px-4 py-3 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Your name" required />
          <input type="email" className="w-full rounded-md bg-neutral-900 border border-white/10 px-4 py-3 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Email address" required />
          <textarea rows={6} className="w-full rounded-md bg-neutral-900 border border-white/10 px-4 py-3 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Project details" required />
          <button type="submit" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-yellow-400 text-neutral-900 font-medium hover:bg-yellow-300 transition">
            <Send className="h-4 w-4" /> Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
