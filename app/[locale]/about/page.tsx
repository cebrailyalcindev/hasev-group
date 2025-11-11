'use client';
import { motion } from 'framer-motion';
import fr from '../../../locales/fr/common.json';
import en from '../../../locales/en/common.json';
import nl from '../../../locales/nl/common.json';
import de from '../../../locales/de/common.json';
import { use } from 'react';

const translations: Record<string, any> = { fr, en, nl, de };

export default function About({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const t = translations[locale] || fr;

  return (
    <motion.div initial={{y:30, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.1, duration:0.6}} className="text-[#1e61ca] max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-4">{t.about?.title}</h1>
      <p className="mb-4">{t.about?.p1}</p>
      <p className="mb-8">{t.about?.p2}</p>
      <h1 className="text-3xl font-semibold mb-4">{t.about?.title_2}</h1>
      <p className="mb-4">{t.about?.p3}</p>
      <p className="mb-8">{t.about?.p4}</p>
      <h1 className="text-3xl font-semibold mb-4">{t.about?.title_3}</h1>
      <ul className="list-disc pl-6 space-y-3 text-[#1e61ca] marker:text-[#1e61ca] marker:text-xl marker:align-middle">
        <li>{t.about?.opt1}</li>
        <li>{t.about?.opt2}</li>
        <li>{t.about?.opt3}</li>
        <li>{t.about?.opt4}</li>
      </ul>
    </motion.div>
  );
}
