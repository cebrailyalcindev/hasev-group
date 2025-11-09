'use client';
import { motion } from 'framer-motion';
import fr from '../../../locales/fr/common.json';
import en from '../../../locales/en/common.json';
import nl from '../../../locales/nl/common.json';
import de from '../../../locales/de/common.json';
import { use } from 'react';

const translations: Record<string, any> = { fr, en, nl, de };

export default function Legal({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const t = translations[locale] || fr;

  return (
    <motion.div initial={{y:30, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.1, duration:0.6}} className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold mb-4">{t.legal?.title || 'Legal notice'}</h1>
      <p>{t.legal?.p1}</p>
      <div className="mt-4 text-sm">
        <p>SIREN / Company number: __________</p>
        <p>Address: Rue de l'Export 10, 1000 Bruxelles</p>
      </div>
    </motion.div>
  );
}
