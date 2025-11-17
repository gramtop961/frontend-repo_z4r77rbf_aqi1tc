import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <ProductGrid />
      <Features />
      <Pricing />
      <Contact />

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-500 to-emerald-400" />
              <p className="text-white/70 text-sm">© {new Date().getFullYear()} Flames ERP Cloud. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-6 text-sm text-white/70">
              <a href="#products" className="hover:text-white">Products</a>
              <a href="#solutions" className="hover:text-white">Solutions</a>
              <a href="#pricing" className="hover:text-white">Pricing</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
