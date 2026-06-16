'use client';

import { motion } from 'framer-motion';
import { use, useState } from 'react';
import fr from '../../../locales/fr/common.json';
import en from '../../../locales/en/common.json';
import nl from '../../../locales/nl/common.json';
import de from '../../../locales/de/common.json';

const translations: Record<string, any> = { fr, en, nl, de };

export default function Contact({ params }: { params: Promise<{ locale: string }> }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const { locale } = use(params);
  const t = translations[locale] || fr;
  const c = t.contact ?? {};
  const mail = c.email || 'contact@hasevgroup.be';

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } else {
      setStatus('error');
    }
  }

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
            {c.contact}
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight">
            {c.title ?? 'Contactez-nous'}
          </h1>
        </motion.div>
      </div>

      {/* ── Content ── */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* ── Left: contact info ── */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="lg:col-span-2"
            >
              <p className="text-[#1A4FBF] text-xs font-bold tracking-[0.3em] uppercase mb-4">
                {c.contact_info}
              </p>
              <h2 className="font-serif text-2xl font-bold text-[#0A1F6B] mb-5 leading-tight">
                {c.contact_info ?? 'Coordonnées'}
              </h2>
              <div className="w-10 h-[2px] bg-[#1A4FBF] mb-8" />

              {c.description && (
                <p className="text-gray-500 leading-relaxed mb-10 whitespace-pre-line">
                  {c.description}
                </p>
              )}

              <div className="space-y-5">
                {/* Address */}
                {c.address && (
                  <div className="flex gap-4 items-start">
                    <span className="mt-0.5 w-8 h-8 shrink-0 flex items-center justify-center bg-[#0A1F6B]">
                      <svg className="w-4 h-4 text-[#3A7FE8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </span>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {c.address.replace(/^Addresse\s*:\s*/i, '')}
                    </p>
                  </div>
                )}

                {/* Phone */}
                {t.footer?.phone && (
                  <div className="flex gap-4 items-center">
                    <span className="w-8 h-8 shrink-0 flex items-center justify-center bg-[#0A1F6B]">
                      <svg className="w-4 h-4 text-[#3A7FE8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </span>
                    <a
                      href={`tel:${t.footer.phone.replace(/\s/g, '')}`}
                      className="text-gray-600 text-sm hover:text-[#1A4FBF] transition-colors"
                    >
                      {t.footer.phone}
                    </a>
                  </div>
                )}

                {/* Email */}
                {mail && (
                  <div className="flex gap-4 items-center">
                    <span className="w-8 h-8 shrink-0 flex items-center justify-center bg-[#0A1F6B]">
                      <svg className="w-4 h-4 text-[#3A7FE8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </span>
                    <a
                      href={`mailto:${mail}`}
                      className="text-gray-600 text-sm hover:text-[#1A4FBF] transition-colors"
                    >
                      {mail}
                    </a>
                  </div>
                )}

                {/* TVA */}
                {c.tva && (
                  <p className="text-gray-400 text-xs pt-2">{c.tva}</p>
                )}
              </div>
            </motion.div>

            {/* ── Right: form ── */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="lg:col-span-3 bg-[#f4f6fb] p-10"
            >
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold tracking-[0.2em] uppercase text-[#0A1F6B] mb-2">
                    {c.name_field ?? 'Nom'} *
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-[#0A1F6B] focus:outline-none focus:border-[#1A4FBF] transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold tracking-[0.2em] uppercase text-[#0A1F6B] mb-2">
                    {c.email_field ?? 'Email'} *
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-[#0A1F6B] focus:outline-none focus:border-[#1A4FBF] transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold tracking-[0.2em] uppercase text-[#0A1F6B] mb-2">
                    {c.message_field ?? 'Message'} *
                  </label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    rows={6}
                    required
                    className="w-full border border-gray-200 bg-white px-4 py-3 text-sm text-[#0A1F6B] focus:outline-none focus:border-[#1A4FBF] transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status === 'loading'}
                  className={`w-full py-4 text-xs font-bold tracking-[0.25em] uppercase transition-colors duration-200 ${
                    status === 'loading'
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-[#0A1F6B] text-white hover:bg-[#1A4FBF]'
                  }`}
                >
                  {status === 'loading' ? c.email_sending : c.email_send}
                </motion.button>

                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-600 text-sm text-center font-medium"
                  >
                    {c.email_sent}
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 text-sm text-center font-medium"
                  >
                    {c.email_sending_error}
                  </motion.p>
                )}
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </>
  );
}
