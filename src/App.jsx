import React from 'react';
import Hero3D from './components/Hero3D';
import FeaturesGrid from './components/FeaturesGrid';
import Pricing from './components/Pricing';
import CTAFooter from './components/CTAFooter';

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_50%_-100px,rgba(16,185,129,0.25),transparent)] bg-slate-950">
      <header className="mx-auto max-w-6xl px-6 py-6 text-white">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400 p-[2px]">
              <div className="h-full w-full rounded-[10px] bg-slate-950"></div>
            </div>
            <div>
              <h1 className="font-geist text-lg font-semibold leading-tight">Tamer Helal English</h1>
              <p className="text-[11px] text-white/60">30+ years of excellence</p>
            </div>
          </a>
          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#community" className="hover:text-white">Community</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur transition hover:bg-white/10">Sign in</button>
            <button className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black shadow-lg ring-1 ring-white/40 transition hover:bg-white/90">Create account</button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-14 px-6 pb-16">
        <Hero3D />
        <FeaturesGrid />
        <Pricing />
      </main>

      <section id="community" className="mx-auto max-w-6xl px-6 pb-4">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-white backdrop-blur">
          <h3 className="font-geist text-2xl font-semibold">Community Chat (Preview)</h3>
          <p className="mt-2 text-white/70">Grade-based rooms where students and teacher interact. Real-time chat will connect to the backend in the next step.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {['First Year','Second Year','Third Year'].map((room) => (
              <div key={room} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/70">Room</p>
                <h4 className="font-medium">{room}</h4>
                <button
                  onClick={() => alert(`${room} chat opens`) }
                  className="mt-4 w-full rounded-lg bg-white/90 px-4 py-2 text-sm font-medium text-black hover:bg-white"
                >
                  Open Chat
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAFooter />
    </div>
  );
}

export default App;
