import { Boxes, Truck, Store, ShoppingCart, Factory, Building2, Scale, Briefcase } from 'lucide-react'

const products = [
  {
    key: 'wms',
    title: 'WMS — Warehouse Management',
    description: 'Inbound/Outbound, putaway, picking, cycle counts, barcode and RFID, yard and dock management.',
    icon: Boxes,
    color: 'from-blue-500 to-emerald-500'
  },
  {
    key: 'tms',
    title: 'TMS — Transport Management',
    description: 'Dispatch, route optimization, fleet tracking, carrier portals, freight audit and payments.',
    icon: Truck,
    color: 'from-emerald-500 to-cyan-500'
  },
  {
    key: 'merc',
    title: 'MERC — Merchandising',
    description: 'Assortments, pricing, promotions, planograms and omni-channel inventory in one place.',
    icon: Store,
    color: 'from-cyan-500 to-blue-500'
  },
  {
    key: 'b2b',
    title: 'B2B Commerce',
    description: 'Self-serve portal, quotes to cash, contract pricing and EDI integrations.',
    icon: Briefcase,
    color: 'from-blue-500 to-indigo-500'
  },
  {
    key: 'b2c',
    title: 'B2C Commerce',
    description: 'Headless storefronts, subscriptions, checkout, payments and returns automation.',
    icon: ShoppingCart,
    color: 'from-indigo-500 to-emerald-500'
  },
  {
    key: 'yms',
    title: 'YMS — Yard Management',
    description: 'Gatehouse, dock scheduling, assets and yard jockey orchestration with live telemetry.',
    icon: Factory,
    color: 'from-emerald-500 to-blue-500'
  },
  {
    key: 'law',
    title: 'Lawyer App',
    description: 'Client intake, matter management, timekeeping, billing and trust accounting compliance.',
    icon: Scale,
    color: 'from-cyan-500 to-emerald-500'
  },
  {
    key: 'ofm',
    title: 'Office & Facility Management',
    description: 'Work orders, assets, bookings, vendors and preventive maintenance scheduling.',
    icon: Building2,
    color: 'from-blue-500 to-cyan-500'
  }
]

export default function ProductGrid() {
  return (
    <section id="products" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Products</h2>
            <p className="mt-2 text-blue-100/80 max-w-2xl">Choose exactly what you need today and add more modules as you scale. Everything works beautifully together.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.key} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition">
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${p.color} text-white shadow-lg`}> 
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-blue-100/80">{p.description}</p>

              <div className="mt-4 flex items-center gap-3">
                <a href="#contact" className="text-sm font-medium text-emerald-300 hover:text-emerald-200">Request demo →</a>
                <a href="#" className="text-sm text-white/60 hover:text-white">Learn more</a>
              </div>

              <div className="pointer-events-none absolute -bottom-24 -right-16 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl transition-all group-hover:scale-125" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
