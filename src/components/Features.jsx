import { ShieldCheck, Cpu, Workflow, Cloud, Sparkles } from 'lucide-react'

const features = [
  {
    title: 'Unified data model',
    desc: 'A consistent schema across modules—no messy integrations or duplicate records.',
    icon: Workflow
  },
  {
    title: 'Scalable cloud',
    desc: 'Elastic infrastructure with global edge and built‑in observability.',
    icon: Cloud
  },
  {
    title: 'AI assist everywhere',
    desc: 'Coprocessors for planning, reconciliation and customer service built into each app.',
    icon: Cpu
  },
  {
    title: 'Enterprise‑grade security',
    desc: 'SSO, fine‑grained permissions, encryption at rest and in transit.',
    icon: ShieldCheck
  }
]

export default function Features() {
  return (
    <section id="solutions" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Why teams choose us</h2>
          <p className="mt-3 text-blue-100/80">Modern UX, deep functionality and open APIs—so you can move faster without compromises.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 text-white shadow">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-blue-100/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
