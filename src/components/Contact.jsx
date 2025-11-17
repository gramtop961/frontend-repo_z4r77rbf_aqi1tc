import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          company: e.target.company.value,
          message: e.target.message.value,
        })
      })
      if (res.ok) setStatus('Thanks! We will reach out shortly.')
      else setStatus('Something went wrong. Please try again.')
    } catch (err) {
      setStatus('Network error. Please try again later.')
    }
  }

  return (
    <section id="contact" className="relative bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Talk to our team</h2>
            <p className="mt-3 text-blue-100/80">Tell us about your needs and we'll tailor a demo across WMS, TMS, commerce, legal or facilities modules.</p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-blue-100/80">
              <p className="font-medium text-white">What to expect:</p>
              <ul className="mt-3 list-disc pl-5 space-y-1">
                <li>Discovery call to understand your workflows</li>
                <li>Live demo with relevant modules</li>
                <li>Security & data architecture overview</li>
              </ul>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="name" required placeholder="Full name" className="rounded-lg bg-white/10 px-4 py-3 text-white placeholder:text-white/60 outline-none" />
              <input name="email" required type="email" placeholder="Email" className="rounded-lg bg-white/10 px-4 py-3 text-white placeholder:text-white/60 outline-none" />
              <input name="company" placeholder="Company" className="sm:col-span-2 rounded-lg bg-white/10 px-4 py-3 text-white placeholder:text-white/60 outline-none" />
              <textarea name="message" rows="5" placeholder="What would you like to achieve?" className="sm:col-span-2 rounded-lg bg-white/10 px-4 py-3 text-white placeholder:text-white/60 outline-none" />
            </div>
            <div className="mt-5 flex items-center gap-3">
              <button type="submit" className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-500 to-emerald-500 px-5 py-3 text-white font-medium">Request demo</button>
              <span className="text-sm text-blue-100/80">{status}</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
