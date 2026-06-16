import Link from "next/link";

interface CtaStripProps {
  locale: string;
  dict?: Record<string, any>;
}

export default function CtaStrip({ locale, dict = {} }: CtaStripProps) {
  const nav     = dict?.nav     ?? {};
  const contact = dict?.contact ?? {};

  return (
    <section className="relative overflow-hidden py-24">
      <div
        className="absolute inset-[-20%] bg-cover bg-center"
        style={{
          backgroundImage: "url('/s2.jpeg')",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="absolute inset-0 bg-[#0A1F6B]/90" />
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#1A4FBF]" />
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1A4FBF]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row items-center justify-between gap-10">
        <div>
          <p className="text-[#3A7FE8] text-xs font-bold tracking-[0.35em] uppercase mb-3">
            {contact.work_together}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight max-w-xl">
            {contact.description?.split("\n")[0] ?? "Une question, un projet ou une demande de partenariat ?"}
          </h2>
        </div>
        <Link
          href={`/${locale}/contact`}
          className="shrink-0 inline-flex items-center gap-2 px-10 py-4 bg-[#1A4FBF] text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#3A7FE8] transition-colors duration-300"
        >
          {nav.contact ?? "Contact"}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
