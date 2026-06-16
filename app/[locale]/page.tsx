'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import fr from '../../locales/fr/common.json';
import en from '../../locales/en/common.json';
import nl from '../../locales/nl/common.json';
import de from '../../locales/de/common.json';
import { use } from 'react';
import { usePathname } from 'next/navigation';
import WhyUs from "@/components/WhyUs";
import Hero from "@/components/Hero";

import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import CtaStrip from "@/components/CtaStrip";

const translations: Record<string, any> = { fr, en, nl, de };

export default function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const t = translations[locale] || fr;
  const pathname = usePathname();

  return (
    <>
      <Hero locale={locale} dict={t} />
      <WhyUs dict={t} />
      <ServicesSection locale={locale} dict={t} />
      <AboutSection dict={t} />
      <CtaStrip locale={locale} dict={t} />
    </>
  );
}
