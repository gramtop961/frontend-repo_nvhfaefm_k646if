import React, { useEffect, useState } from 'react';
import { Rocket, Play, MessageSquare } from 'lucide-react';

// Safe Spline loader to prevent white-screen if the scene fails to load
function SafeSpline({ scene }) {
  const [SplineComp, setSplineComp] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    import('@splinetool/react-spline')
      .then((mod) => {
        if (mounted) setSplineComp(() => mod.default);
      })
      .catch((e) => {
        console.error('Spline failed to load:', e);
        if (mounted) setError(e);
      });
    return () => {
      mounted = false;
    };
  }, []);

  if (error) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-black/40">
        <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur">
          3D preview unavailable on this device/network.
        </div>
      </div>
    );
  }

  if (!SplineComp) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/30 border-t-emerald-300" />
      </div>
    );
  }

  return <SplineComp scene={scene} style={{ width: '100%', height: '100%' }} />;
}

export default function Hero3D() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden rounded-3xl border border-white/10 bg-black/60 shadow-2xl">
      <div className="absolute inset-0">
        <SafeSpline scene="https://prod.spline.design/4nF0yqVka2Z4lK3d/scene.splinecode" />
      </div>

      {/* Soft gradient glass overlays - keep them non-blocking for interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 text-center text-white md:pt-28">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs backdrop-blur">
          <Rocket className="h-4 w-4 text-emerald-300" />
          <span className="text-white/90">Liquid Glass Edition • 3D Interactive</span>
        </div>
        <h1 className="font-geist text-4xl font-semibold leading-tight text-white drop-shadow md:text-6xl">
          Learn English with
          <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent"> Tamer Helal</span>
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-white/80 md:text-lg">
          A modern platform from Tanta, Gharbia — 30+ years of teaching excellence blended with immersive 3D visuals, structured courses, and smart assessments.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 rounded-xl bg-white/90 px-5 py-3 font-medium text-black shadow-lg ring-1 ring-white/40 transition hover:bg-white"
          >
            <Play className="h-5 w-5" />
            Start Learning
          </a>
          <a
            href="#community"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:border-white/30"
          >
            <MessageSquare className="h-5 w-5" />
            Join Community
          </a>
        </div>
      </div>
    </section>
  );
}
