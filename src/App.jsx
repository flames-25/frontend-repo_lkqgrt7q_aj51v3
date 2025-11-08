import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkShowcase from './components/WorkShowcase'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div className="font-inter text-gray-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <WorkShowcase />
        <Services />
        <Contact />
      </main>
      <footer className="border-t border-black/5 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} AIGraphics — AI Graphics Designer</p>
          <p>Built with Spline, React and a lot of curiosity.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
