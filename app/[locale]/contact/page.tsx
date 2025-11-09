'use client';
import { motion } from 'framer-motion';
import fr from '../../../locales/fr/common.json';
import en from '../../../locales/en/common.json';
import nl from '../../../locales/nl/common.json';
import de from '../../../locales/de/common.json';
import { use, useState } from 'react';

const translations: Record<string, any> = { fr, en, nl, de };

export default function Contact({ params }: { params: Promise<{ locale: string }> }) {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

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
    const { locale } = use(params);
    const t = translations[locale] || fr;
    const mail = t.contact?.email || 'contact@hasev.example';

    return (
        <motion.div initial={{y:30, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.1, duration:0.6}} className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-semibold mb-4">{t.contact?.title || 'Contact'}</h1>
          <p className="mb-4">{t.contact?.address}</p>
          <p className="mb-6">Tel: {t.contact?.phone}</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 text-gray-700 font-medium">Nom</label>
              <input
                type="text"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700 font-medium">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700 font-medium">Message</label>
              <textarea
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                rows={5}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={status === 'loading'}
              className={`w-full py-3 rounded-lg text-white font-semibold transition ${
                status === 'loading'
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-primary hover:bg-primary/90'
              }`}
            >
              {status === 'loading' ? 'Envoi en cours...' : 'Envoyer'}
            </motion.button>

            {status === 'success' && (
              <p className="text-green-600 text-center mt-3">✅ Message envoyé avec succès.</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-center mt-3">❌ Une erreur est survenue, veuillez réessayer.</p>
            )}
          </form>

          <div className="mt-8">
            <p className="text-sm">Ou par email : <a href={`mailto:${mail}`} className="underline">{mail}</a></p>
          </div>
        </motion.div>
    );
}
