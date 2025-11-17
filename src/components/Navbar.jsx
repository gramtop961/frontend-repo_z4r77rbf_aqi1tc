import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Products', href: '#products' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/10 backdrop-blur supports-[backdrop-filter]:bg-white/10">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-500 to-emerald-400 shadow-lg"></div>
              <span className="text-white font-semibold">Flames ERP Cloud</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-white/90 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center rounded-lg bg-gradient-to-r from-blue-500 to-emerald-500 px-4 py-2 text-sm font-medium text-white shadow hover:opacity-90 transition">
                Get a demo
              </a>
            </nav>

            <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-white/90 hover:bg-white/10">
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="block rounded-lg bg-gradient-to-r from-blue-500 to-emerald-500 px-3 py-2 text-center font-medium text-white">
                Get a demo
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
