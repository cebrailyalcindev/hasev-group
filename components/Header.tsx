"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const LOCALES = ["fr", "en", "nl", "de"] as const;

interface HeaderProps {
  locale: string;
  dict?: Record<string, any>;
}

export default function Header({ locale, dict = {} }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const nav     = dict?.nav     ?? {};
  const footer  = dict?.footer  ?? {};
  const contact = dict?.contact ?? {};

  const phone = footer?.phone ?? contact?.phone;
  const email = contact?.email;

  const navLinks = [
    { href: `/${locale}`,          label: nav.home     ?? "Accueil"  },
    { href: `/${locale}/about`,    label: nav.about    ?? "À propos" },
    // { href: `/${locale}/services`, label: nav.services ?? "Services" },
    { href: `/${locale}/contact`,  label: nav.contact  ?? "Contact"  },
  ];

  const isActive = (href: string) =>
    href === `/${locale}`
      ? pathname === href
      : pathname.startsWith(href);

  return (
    <header className="w-full sticky top-0 z-50 shadow-md">

      {/* ── Top contact bar ── */}
      <div className="bg-[#0A1F6B] text-white/70 text-[11px] py-2 px-6 sm:px-10 flex justify-end items-center gap-5 tracking-wide">
        {phone && (
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.773-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            {phone}
          </a>
        )}
        {email && (
          <a
            href={`mailto:${email}`}
            className="hidden sm:flex hover:text-white transition-colors items-center gap-1.5"
          >
            <svg className="w-3 h-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            {email}
          </a>
        )}

        {/* Language switcher */}
        <div className="flex items-center gap-2 border-l border-white/15 pl-4 ml-1">
          {LOCALES.map((loc) => (
            <Link
              key={loc}
              href={pathname.replace(`/${locale}`, `/${loc}`)}
              className={`text-[10px] font-bold tracking-[0.15em] uppercase transition-colors ${
                loc === locale ? "text-[#3A7FE8]" : "text-white/40 hover:text-white"
              }`}
            >
              {loc}
            </Link>
          ))}
        </div>
      </div>

      {/* ── Main nav ── */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between h-16">

          {/* Logo */}
          <Link href={`/${locale}`} className="shrink-0">
            <Image
              src="/logo.png"
              alt="Hasev Group"
              width={120}
              height={48}
              className="object-contain h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors group ${
                  isActive(link.href) ? "text-[#0A1F6B]" : "text-gray-400 hover:text-[#0A1F6B]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-[#1A4FBF] transition-all duration-250 ${
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}

            <Link
              href={`/${locale}/contact`}
              className="ml-2 px-5 py-2 bg-[#0A1F6B] text-white text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#1A4FBF] transition-colors duration-200"
            >
              {nav.contact ?? "Contact"}
            </Link>
          </div>

          {/* Burger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[2px] bg-[#0A1F6B] transition-transform duration-200 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-[2px] bg-[#0A1F6B] transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-[2px] bg-[#0A1F6B] transition-transform duration-200 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>

        {/* Mobile drawer */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center px-6 py-3.5 text-[11px] font-semibold tracking-[0.18em] uppercase border-b border-gray-50 transition-colors ${
                  isActive(link.href)
                    ? "text-[#0A1F6B] bg-blue-50"
                    : "text-gray-400 hover:text-[#0A1F6B] hover:bg-blue-50"
                }`}
              >
                {isActive(link.href) && (
                  <span className="w-1 h-4 bg-[#1A4FBF] mr-3 shrink-0" />
                )}
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
