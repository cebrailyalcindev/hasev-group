import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  locale: string;
  dict?: Record<string, any>;
}

export default function Footer({ locale, dict = {} }: FooterProps) {
  const nav     = dict?.nav     ?? {};
  const footer  = dict?.footer  ?? {};
  const contact = dict?.contact ?? {};

  const phone   = footer?.phone ?? contact?.phone;
  const email   = contact?.email;
  const address = contact?.address;

  const navLinks = [
    { href: `/${locale}`,          label: nav.home     ?? "Accueil"          },
    { href: `/${locale}/about`,    label: nav.about    ?? "À propos"         },
    { href: `/${locale}/services`, label: nav.services ?? "Services"         },
    { href: `/${locale}/contact`,  label: nav.contact  ?? "Contact"          },
    { href: `/${locale}/legal`,    label: nav.legal    ?? "Mentions légales" },
  ];

  return (
    <footer className="bg-[#0A1F6B] text-white">
      {/* Royal blue top border */}
      <div className="h-[3px] bg-[#1A4FBF]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* ── Brand ── */}
          <div className="md:col-span-1">
            <Link href={`/${locale}`} className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="Hasev Group"
                width={130}
                height={52}
                className="object-contain h-12 w-auto"
              />
            </Link>
            {address && (
              <p className="text-white/45 text-sm leading-relaxed mb-3">
                {address.replace(/^Addresse\s*:\s*/i, "")}
              </p>
            )}
            {phone && (
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="block text-white/45 text-sm hover:text-[#3A7FE8] transition-colors mb-1.5"
              >
                {phone}
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                className="block text-white/45 text-sm hover:text-[#3A7FE8] transition-colors"
              >
                {email}
              </a>
            )}
          </div>

          {/* ── Navigation ── */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/35 mb-6">
              {footer.navigation}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/55 text-sm hover:text-[#3A7FE8] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact CTA ── */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/35 mb-6">
              {contact.contact}
            </h4>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#1A4FBF] text-[#3A7FE8] text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#1A4FBF] hover:text-white transition-colors duration-200"
            >
              {nav.contact ?? "Nous contacter"}
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            {contact?.tva && (
              <p className="mt-8 text-white/30 text-xs">{contact.tva}</p>
            )}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-white/25 text-xs">
            {footer?.rights ?? `© ${new Date().getFullYear()} Hasev Group. Tous droits réservés.`}
          </p>
          <div className="flex gap-4">
            {(["fr", "en", "nl", "de"] as const).map((loc) => (
              <Link
                key={loc}
                href={`/${loc}`}
                className={`text-[10px] uppercase tracking-widest font-semibold transition-colors ${
                  loc === locale ? "text-[#3A7FE8]" : "text-white/25 hover:text-white"
                }`}
              >
                {loc}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
