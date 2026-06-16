'use client';

import { motion } from 'framer-motion';
import { use } from 'react';
import fr from '../../../locales/fr/common.json';
import en from '../../../locales/en/common.json';
import nl from '../../../locales/nl/common.json';
import de from '../../../locales/de/common.json';

const translations: Record<string, any> = { fr, en, nl, de };

export default function About({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const t = translations[locale] || fr;
  const a = t.about ?? {};

  const commitments = [a.opt1, a.opt2, a.opt3, a.opt4].filter(Boolean);

  return (
    <>
      {/* ── Page banner ── */}
      <div className="relative bg-[#0A1F6B] py-20 px-6 sm:px-10 flex flex-col items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, #1A4FBF 0px, #1A4FBF 1px, transparent 1px, transparent 40px)',
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1A4FBF]" />
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <p className="text-[#3A7FE8] text-xs font-bold tracking-[0.35em] uppercase mb-4">
            {a.about}
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight">
            {a.title ?? 'Qui sommes-nous ?'}
          </h1>
        </motion.div>
      </div>

      {/* ── Content ── */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-20 space-y-20">

          {/* Block 1 — Who we are + Vision side by side */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            {/* Left — story */}
            <div>
              <p className="text-[#1A4FBF] text-xs font-bold tracking-[0.3em] uppercase mb-4">
                {a.our_story}
              </p>
              <h2 className="font-serif text-3xl font-bold text-[#0A1F6B] mb-5 leading-tight">
                {a.title}
              </h2>
              <div className="w-10 h-[2px] bg-[#1A4FBF] mb-7" />
              {a.p1 && (
                <p className="text-gray-600 leading-relaxed mb-5 whitespace-pre-line">{a.p1}</p>
              )}
              {a.p2 && (
                <p className="text-gray-500 leading-relaxed italic border-l-4 border-[#1A4FBF] pl-5">
                  {a.p2}
                </p>
              )}
            </div>

            {/* Right — vision card */}
            <div className="bg-[#f4f6fb] p-10 border-l-4 border-[#1A4FBF]">
              <p className="text-[#1A4FBF] text-xs font-bold tracking-[0.3em] uppercase mb-4">
                {a.vision}
              </p>
              <h2 className="font-serif text-2xl font-bold text-[#0A1F6B] mb-4 leading-tight">
                {a.title_2}
              </h2>
              <div className="w-8 h-[2px] bg-[#1A4FBF] mb-6" />
              {a.p3 && <p className="text-gray-600 leading-relaxed mb-3">{a.p3}</p>}
              {a.p4 && <p className="text-gray-500 leading-relaxed">{a.p4}</p>}
            </div>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-gray-100" />

          {/* Block 2 — Commitments grid */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#1A4FBF] text-xs font-bold tracking-[0.3em] uppercase mb-4">
              {a.title_3}
            </p>
            <h2 className="font-serif text-3xl font-bold text-[#0A1F6B] mb-5 leading-tight">
              {a.title_3}
            </h2>
            <div className="w-10 h-[2px] bg-[#1A4FBF] mb-10" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {commitments.map((item: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 p-6 bg-[#f4f6fb] border border-transparent hover:border-[#1A4FBF] transition-colors duration-200"
                >
                  <span className="mt-0.5 w-5 h-5 shrink-0 flex items-center justify-center bg-[#1A4FBF]">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
}
