import React from 'react';
import { Video, BookOpen, GraduationCap, Users, Shield, Wallet } from 'lucide-react';

const features = [
  {
    icon: Video,
    title: 'Video Lessons',
    desc: 'Stream high-quality lessons powered by Bunny.net with downloadable resources.',
  },
  {
    icon: BookOpen,
    title: 'Auto-Graded Quizzes',
    desc: 'Short quizzes after each lesson with instant feedback and progress tracking.',
  },
  {
    icon: GraduationCap,
    title: 'Three Grades',
    desc: 'Structured tracks for First, Second, and Third year students — online or at the center.',
  },
  {
    icon: Users,
    title: 'Community Chat',
    desc: 'Grade-based chat spaces where students engage with Mr. Tamer and peers.',
  },
  {
    icon: Wallet,
    title: 'Monthly Subscriptions',
    desc: 'Pay for the month you need via Paymob. Renew to keep access to new content.',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    desc: 'Protected accounts for teachers and students with role-based access.',
  },
];

export default function FeaturesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16" id="features">
      <div className="mb-10 text-center">
        <h2 className="font-geist text-3xl font-semibold text-white md:text-4xl">
          Everything for a complete learning experience
        </h2>
        <p className="mt-3 text-white/70">
          Built to support teaching, assessment, and community — in one place.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur transition hover:bg-white/10"
          >
            <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-emerald-400/30 to-cyan-400/30 p-3 ring-1 ring-white/20">
              <Icon className="h-6 w-6 text-emerald-300" />
            </div>
            <h3 className="font-medium">{title}</h3>
            <p className="mt-2 text-sm text-white/75">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
