export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-gradient-to-b from-slate-900 to-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple, usage‑based pricing</h2>
          <p className="mt-3 text-blue-100/80">Start small and scale predictable. No long‑term lock‑ins.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{
            name: 'Starter', price: '$299/mo', bullets: ['Up to 25 users', 'Email support', '2 modules']
          },{
            name: 'Growth', price: '$999/mo', bullets: ['Up to 150 users', 'Priority support', '5 modules']
          },{
            name: 'Enterprise', price: 'Custom', bullets: ['Unlimited users', 'SLA & SSO', 'All modules']
          }].map(t => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-semibold">{t.name}</h3>
              <p className="mt-2 text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">{t.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-blue-100/80">
                {t.bullets.map(b => <li key={b}>• {b}</li>)}
              </ul>
              <a href="#contact" className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-blue-500 to-emerald-500 px-4 py-2 text-white">Choose plan</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
