'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageSelector } from "./LanguageSelector";

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) => (
  <Link
    href={href}
    onClick={onClick}
    className="block px-4 py-2 hover:bg-gray-100 rounded transition-colors duration-150"
  >
    {children}
  </Link>
);

export default function Header({ locale }: { locale: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const LANGUAGE_SELECTOR_ID = 'language-selector';
  useEffect(() => {
      const handleWindowClick = (event: any) => {
          const target = event.target.closest('button');
          if (target && target.id === LANGUAGE_SELECTOR_ID) {
              return;
          }
          setIsOpen(false);
      }
      window.addEventListener('click', handleWindowClick)
      return () => {
          window.removeEventListener('click', handleWindowClick);
      }
  }, []);

  const handleLanguageChange = (selectedLanguage: string) => {
    const parts = window.location.pathname.split('/').filter(Boolean);
    if (parts.length === 0) window.location.pathname = '/' + selectedLanguage;
    else {
      parts[0] = selectedLanguage;
      window.location.pathname = '/' + parts.join('/');
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed w-full top-0 z-50 transition-all ${
        scrolled ? 'bg-white/90 shadow backdrop-blur' : 'bg-white/70 shadow backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <img src="/logo.png" alt="Hasev Group" className="h-20 object-contain" />
        </Link>

        {/* Navigation Desktop */}
        <nav className="relative hidden md:flex gap-6 items-center">
          <Link href={`/${locale}`} className="text-sm font-medium hover:text-accent transition-colors">Accueil</Link>
          <Link href={`/${locale}/about`} className="whitespace-nowrap text-sm font-medium hover:text-accent transition-colors">À propos</Link>
          <Link href={`/${locale}/services`} className="text-sm font-medium hover:text-accent transition-colors">Services</Link>
          <Link href={`/${locale}/contact`} className="text-sm font-medium hover:text-accent transition-colors">Contact</Link>
          <LanguageSelector locale={locale} />
        </nav>

        {/* Navigation Mobile */}
        <div className="md:hidden flex items-center gap-2 relative">
          <LanguageSelector locale={locale} />
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="p-2 rounded border bg-white/70 hover:bg-gray-100 transition"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="#0b2545"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Fond sombre flou derrière le menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            />

            {/* Panneau du menu latéral */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 z-50 h-full w-full bg-white shadow-2xl flex flex-col"
            >
              <div className="px-4 py-4 flex items-center justify-between border-b bg-white">
                <span className="text-lg font-semibold text-gray-800">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="p-2 rounded hover:bg-gray-100"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 18L18 6M6 6l12 12"
                      stroke="#0b2545"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <nav className="bg-white px-4 py-5 space-y-2 text-gray-700 border-b">
                <NavLink onClick={() => setOpen(false)} href={`/${locale}`}>Accueil</NavLink>
                <NavLink onClick={() => setOpen(false)} href={`/${locale}/about`}>À propos</NavLink>
                <NavLink onClick={() => setOpen(false)} href={`/${locale}/services`}>Services</NavLink>
                <NavLink onClick={() => setOpen(false)} href={`/${locale}/contact`}>Contact</NavLink>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
