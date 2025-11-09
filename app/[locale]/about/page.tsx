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
    <motion.div initial={{y:30, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.1, duration:0.6}} className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-4">{t.about?.title || 'About'}</h1>
      <p className="mb-4">{t.about?.p1}</p>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="col-span-2">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at arcu vitae purus volutpat pharetra. Integer at neque nec nibh cursus volutpat.</p>
        </div>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.4}}>
          <img src="https://picsum.photos/400/300?random=5" alt="team" className="w-full h-48 object-cover rounded" />
        </motion.div>
      </div>
    </motion.div>
  );
}
