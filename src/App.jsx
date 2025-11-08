import React, { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkShowcase from './components/WorkShowcase';
import Services from './components/Services';
import Contact from './components/Contact';
import AdminPanel from './components/AdminPanel';

const DEFAULT_SPLINE = 'https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode';
const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

const defaultContent = {
  siteName: 'Shaith Ibrahim',
  heroTitle: 'AI Graphics Designer crafting modern visual systems',
  heroSubtitle: 'I blend generative AI with design direction to create memorable brands, motion, and 3D visuals. Available for collaborations and commissions.',
  heroBackground: '',
  projects: [
    {
      id: 'p1',
      title: 'Neon Threads – Fashion Campaign',
      description: 'AI-augmented lookbook with dynamic light trails and volumetric styling.',
      image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
    },
    {
      id: 'p2',
      title: 'Sonic Bloom – Album Art Series',
      description: 'Procedural botanicals rendered with diffusion priors and color grading.',
      image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
    },
    {
      id: 'p3',
      title: 'Orbital—Product Reveal',
      description: 'MoGraph teaser with abstract ray-marched forms and glassy materials.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop',
    },
  ],
  services: [
    { id: 's1', icon: 'design', title: 'Visual Systems', description: 'Identity, typography, palettes, and scalable design languages.' },
    { id: 's2', icon: 'imagery', title: 'AI Imagery', description: 'Art-direction with diffusion, control nets, and upscaling.' },
    { id: 's3', icon: 'launch', title: 'Motion & 3D', description: 'Product reveals, hero loops, and showreels with sound.' },
  ],
};

const STORAGE_KEY = 'portfolio_content';

function App() {
  const [content, setContent] = useState(defaultContent);
  const [adminOpen, setAdminOpen] = useState(false);

  // Load from backend on mount
  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/portfolio`);
        if (res.ok) {
          const data = await res.json();
          // Merge to ensure defaults for any missing fields
          setContent((prev) => ({ ...prev, ...data }));
          return;
        }
      } catch (e) {
        // fallback to localStorage if backend not reachable
      }
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          setContent({ ...defaultContent, ...parsed });
        }
      } catch {}
    };
    load();
  }, []);

  const saveContent = async () => {
    // Save to backend; also mirror to localStorage for resilience
    try {
      const res = await fetch(`${API_BASE}/api/portfolio`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
      });
      if (res.ok) {
        const data = await res.json();
        setContent((prev) => ({ ...prev, ...data }));
      }
    } catch {}
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  };

  const heroBackgroundUrl = useMemo(() => {
    return content.heroBackground || DEFAULT_SPLINE;
  }, [content.heroBackground]);

  const handleDropReorder = (movedId) => {
    setContent((prev) => {
      const idx = prev.projects.findIndex((p) => p.id === movedId);
      if (idx < 0) return prev;
      const arr = [...prev.projects];
      const [moved] = arr.splice(idx, 1);
      arr.unshift(moved);
      return { ...prev, projects: arr };
    });
  };

  const handleReplaceProjectImage = async (id, file) => {
    if (!file) return;
    const dataUrl = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
    setContent((prev) => ({
      ...prev,
      projects: prev.projects.map((p) => (p.id === id ? { ...p, image: dataUrl } : p)),
    }));
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Navbar onOpenAdmin={() => setAdminOpen(true)} siteName={content.siteName} />
      <Hero title={content.heroTitle} subtitle={content.heroSubtitle} backgroundUrl={heroBackgroundUrl} />
      <WorkShowcase projects={content.projects} onDropReorder={handleDropReorder} onReplaceImage={handleReplaceProjectImage} />
      <Services services={content.services} />
      <Contact />

      <AdminPanel isOpen={adminOpen} onClose={() => setAdminOpen(false)} content={content} setContent={setContent} onSave={saveContent} />
    </div>
  );
}

export default App;
