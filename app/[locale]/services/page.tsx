'use client';
import { motion } from 'framer-motion';
import fr from '../../../locales/fr/common.json';
import en from '../../../locales/en/common.json';
import nl from '../../../locales/nl/common.json';
import de from '../../../locales/de/common.json';
import { use } from 'react';

const translations: Record<string, any> = { fr, en, nl, de };

export default function Services({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const t = translations[locale] || fr;

  return (
    <motion.div initial={{y:30, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.1, duration:0.6}} className="text-[#1e61ca] max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-4">{t.services?.title || 'Services'}</h1>
      <p className="mb-6">{t.services?.p1}</p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 border rounded">
          <h3 className="font-semibold mb-2">{t.services_list?.s1}</h3>
          <p className="text-sm mb-4">Nous négocions et gérons les contrats d'achats internationaux pour optimiser coûts et délais.</p>
          <img src="https://picsum.photos/360/220?random=6" alt="" className="w-full h-40 object-cover rounded" />
        </div>
        <div className="p-6 border rounded">
          <h3 className="font-semibold mb-2">{t.services_list?.s3}</h3>
          <p className="text-sm mb-4">Planification du transport, suivi des cargaisons et optimisation des itinéraires.</p>
          <img src="https://picsum.photos/360/220?random=7" alt="" className="w-full h-40 object-cover rounded" />
        </div>
        <div className="p-6 border rounded">
          <h3 className="font-semibold mb-2">{t.services_list?.s5}</h3>
          <p className="text-sm mb-4">Entrepôts sécurisés et gestion informatisée du stock.</p>
          <img src="https://picsum.photos/360/220?random=8" alt="" className="w-full h-40 object-cover rounded" />
        </div>
      </div>
    </motion.div>
  );
}
