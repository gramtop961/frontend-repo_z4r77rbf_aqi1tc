import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-28 lg:pt-32 min-h-[85vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-950/60 to-slate-950 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl py-20 lg:py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            New: Unified suite for WMS, TMS, B2B & more
          </div>
          <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Operate your business on one modern platform
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-blue-100/90">
            A modular ERP cloud for logistics, commerce, legal and facilities. Beautiful, fast, and built for teams.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#products" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-emerald-500 px-5 py-3 text-white font-medium shadow-lg shadow-emerald-500/20">
              Explore products
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-white/90 hover:text-white">
              Talk to sales
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
