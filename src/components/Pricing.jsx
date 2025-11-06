import React from 'react';
import { Check, Calendar, CreditCard } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-white backdrop-blur">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs">
            <Calendar className="h-4 w-4 text-emerald-300" />
            Monthly Subscription
          </div>
          <h3 className="font-geist text-2xl font-semibold">January Package</h3>
          <p className="mt-2 text-white/70">Access all January videos, quizzes, and resources.</p>
          <div className="mt-6 flex items-baseline gap-2">
            <span className="text-4xl font-bold">100</span>
            <span className="text-white/70">EGP / month</span>
          </div>
          <ul className="mt-6 space-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-300"/> First • Second • Third Year</li>
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-300"/> Online & Center Students</li>
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-300"/> Video lessons + resources</li>
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-300"/> Auto-graded quizzes</li>
          </ul>
          <button
            className="mt-8 w-full rounded-xl bg-white px-5 py-3 font-medium text-black shadow-lg ring-1 ring-white/40 transition hover:bg-white/90"
            onClick={() => alert('Paymob integration will be connected to the backend.')}
          >
            <CreditCard className="mr-2 inline-block h-5 w-5" /> Subscribe via Paymob
          </button>
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 p-8 text-white backdrop-blur">
          <h4 className="font-geist text-xl font-semibold">Choose Your Grade</h4>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {['First Year','Second Year','Third Year'].map((g) => (
              <button
                key={g}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
                onClick={() => alert(`${g} selected`)}
              >
                {g}
              </button>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {['Online Students','Center Students'].map((t) => (
              <button
                key={t}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
                onClick={() => alert(`${t} track selected`)}
              >
                {t}
              </button>
            ))}
          </div>
          <p className="mt-6 text-sm text-white/70">
            After payment, your account will immediately unlock the selected month for your grade.
          </p>
        </div>
      </div>
    </section>
  );
}
