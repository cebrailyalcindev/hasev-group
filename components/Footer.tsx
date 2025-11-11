'use client';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail } from 'lucide-react';
import fr from '../locales/fr/common.json';
import en from '../locales/en/common.json';
import nl from '../locales/nl/common.json';
import de from '../locales/de/common.json';

const translations: Record<string, any> = { fr, en, nl, de };

export default function Footer({ locale }: { locale: string }) {
  const year = new Date().getFullYear();

  const t = translations[locale] || fr;
  const mail = t.contact?.email || 'hasevgroup@gmail.com';

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#0d3068] text-white mt-12 b-0"
    >
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <img src="/logo_white.png" alt="Hasev Group" className="h-10 mb-3" />
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
                <MapPin/>
                <p className="text-sm opacity-80">{t.contact?.address}</p>
            </div>
            <div className="flex gap-2 items-center">
                <Phone/>
                <a href={`tel:${t.footer?.phone}`} className="underline">{t.footer?.phone}</a>
            </div>
            <div className="flex gap-2 items-center">
                <Mail/>
                <a href={`mailto:${mail}`} className="text-sm opacity-80 underline">{mail}</a>
            </div>
            <p className="text-sm opacity-80">{t.contact?.tva}</p>
          </div>
        </div>
      </div>

      <div className="bg-[#0d3068]/80 text-center text-xs py-3 border-t border-white/10">
        © {year} {t.footer?.rights}
      </div>
    </motion.footer>
  );
}
