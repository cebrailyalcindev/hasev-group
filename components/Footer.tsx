'use client';
import { motion } from 'framer-motion';
import { Facebook, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-primary text-white mt-12 b-0"
    >
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <img src="/logo.png" alt="Hasev Group" className="h-10 mb-3" />
          <p className="text-sm opacity-80 mb-2">Rue de l'Export 10, 1000 Bruxelles</p>
          <p className="text-sm opacity-80">info@hasevgroup.be</p>
        </div>

        <div className="flex gap-4">
          <a href="#" className="hover:text-gold transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-gold transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:info@hasevgroup.be" className="hover:text-gold transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="bg-primary/80 text-center text-xs py-3 border-t border-white/10">
        © {year} Hasev Group — Tous droits réservés.
      </div>
    </motion.footer>
  );
}
