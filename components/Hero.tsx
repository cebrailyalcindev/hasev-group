"use client";

import Link from "next/link";

interface HeroProps {
  locale: string;
  dict?: Record<string, any>;
}

export default function Hero({ locale, dict = {} }: HeroProps) {
  const hero = dict?.hero ?? {};

  return (
    <section className="relative w-full min-h-screen flex items-end overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/truck_home.jpeg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center 30%",
        }}
      />
      {/* Blue-tinted gradient overlay matching the logo palette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F6B]/95 via-[#0A1F6B]/55 to-[#0A1F6B]/20" />
      {/* Royal blue bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1A4FBF]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 pb-24 pt-40">
        <p className="text-[#3A7FE8] text-xs font-bold tracking-[0.35em] uppercase mb-5">
          Hasev Group
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] max-w-3xl mb-7">
          {hero.title ?? "Votre partenaire logistique en Belgique et à l'international"}
        </h1>
        <p className="text-white/70 text-base sm:text-lg max-w-2xl leading-relaxed mb-10 font-light">
          {hero.subtitle}
        </p>
        <Link
          href={`/${locale}/contact`}
          className="inline-flex items-center gap-2 px-9 py-4 bg-[#1A4FBF] text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#3A7FE8] transition-colors duration-300"
        >
          {hero.cta ?? "Contactez-nous"}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
