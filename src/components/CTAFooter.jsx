import React from 'react';
import { Mail, MessageCircle, Shield } from 'lucide-react';

export default function CTAFooter() {
  return (
    <footer className="mx-auto max-w-6xl px-6 pb-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-white backdrop-blur">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-geist text-2xl font-semibold">Have questions? We're here to help.</h3>
            <p className="mt-2 text-white/70">Message the community or contact the teacher directly.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#community" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10">
              <MessageCircle className="h-4 w-4 text-emerald-300"/> Community Chat
            </a>
            <a href="mailto:hello@tamerhelal-english.com" className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium text-black shadow-lg ring-1 ring-white/40 transition hover:bg-white/90">
              <Mail className="h-4 w-4"/> Contact Teacher
            </a>
          </div>
        </div>
        <div className="mt-6 flex items-center gap-2 text-xs text-white/60">
          <Shield className="h-3.5 w-3.5"/>
          Secure platform • Role-based access • Privacy-first
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Tamer Helal English — Tanta City, Gharbia Governorate. All rights reserved.
      </p>
    </footer>
  );
}
