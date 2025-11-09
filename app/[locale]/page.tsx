'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import fr from '../../locales/fr/common.json';
import en from '../../locales/en/common.json';
import nl from '../../locales/nl/common.json';
import de from '../../locales/de/common.json';
import { use } from 'react';
import { usePathname } from 'next/navigation';

const translations: Record<string, any> = { fr, en, nl, de };

export default function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const t = translations[locale] || fr;
  const pathname = usePathname();

  return (
    <div>
      <motion.section initial={{y:30, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.1, duration:0.6}}>
          <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-[#1e61ca] text-3xl md:text-4xl font-bold mb-4">{t.hero.title}</h1>
              <p className="text-[#1e61ca] text-lg mb-6">{t.hero.subtitle}</p>
              <motion.div key="home-contact-link" whileHover={{scale:1.02}} whileTap={{ scale: 0.95 }} transition={{ type: 'spring', stiffness: 300 }} className="inline-block">
                <Link href={`/${locale}/contact`} className="inline-block px-6 py-3 bg-[#1e61ca] text-white rounded">{t.hero.cta}</Link>
              </motion.div>
            </div>
            <motion.div key={pathname + '-contact-btn'} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.4}} className="rounded-lg overflow-hidden shadow-lg">
              <img src="truck_home.jpg" alt="hero" className="w-full h-64 md:h-80 object-cover" />
            </motion.div>
          </div>
      </motion.section>

      <motion.section initial={{y:30, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.1, duration:0.6}} className="text-[#1e61ca] max-w-6xl mx-auto px-4 py-12">
          <motion.h2 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="text-2xl font-semibold mb-4">Services</motion.h2>
          <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="mb-6">Solutions complètes d’import/export et logistique.</motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div whileHover={{ y:-6 }} className="p-6 border rounded shadow-sm">
              <img src="https://picsum.photos/400/240?random=2" alt="import" className="w-full h-36 object-cover rounded mb-3" />
              <h3 className="font-semibold mb-2">Importation & sourcing</h3>
              <p className="text-sm">Gestion complète des approvisionnements et des fournisseurs internationaux.</p>
            </motion.div>
            <motion.div whileHover={{ y:-6 }} className="p-6 border rounded shadow-sm">
              <img src="https://picsum.photos/400/240?random=3" alt="export" className="w-full h-36 object-cover rounded mb-3" />
              <h3 className="font-semibold mb-2">Exportation & distribution</h3>
              <p className="text-sm">Solutions logistiques pour acheminer vos produits vers de nouveaux marchés.</p>
            </motion.div>
            <motion.div whileHover={{ y:-6 }} className="p-6 border rounded shadow-sm">
              <img src="https://picsum.photos/400/240?random=4" alt="logistics" className="w-full h-36 object-cover rounded mb-3" />
              <h3 className="font-semibold mb-2">Dédouanement & conformité</h3>
              <p className="text-sm">Support douanier et documentation pour des opérations sans accrocs.</p>
            </motion.div>
          </div>
      </motion.section>
    </div>
  );
}
